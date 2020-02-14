import React from 'react';
import css from '@styled-system/css';

let unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,

  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};

const addUnitIfNeeded = (name, value) => {
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in unitlessKeys)) {
    return `${value}px`; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
};

const camelCaseToSnakeCase = prop =>
  prop.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

const populateRulesObject = (className, cssObject, acc) => {
  Object.keys(cssObject).forEach(key => {
    const value = cssObject[key];
    if (typeof value === 'string' || typeof value === 'number') {
      if (!acc[className]) {
        acc[className] = '';
      }
      acc[className] +=
        camelCaseToSnakeCase(key) + ':' + addUnitIfNeeded(key, value) + ';';
    } else if (typeof value === 'object') {
      if (key.startsWith('@')) {
        if (!acc[key]) {
          acc[key] = {};
        }
        populateRulesObject(className, value, acc[key]);
      } else {
        populateRulesObject(key.replace(/&/g, className), value, acc);
      }
    }
  });
};

const stylesObjectToRulesObjects = cssObject => {
  const rulesObjects = {};
  populateRulesObject('&', cssObject, rulesObjects);
  return rulesObjects;
};

const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const sheet = styleEl.sheet;

const systemToClassMap = {};

const useClassName = systemObject => {
  const styleObjectHash = JSON.stringify(systemObject);

  if (systemToClassMap[styleObjectHash]) {
    return systemToClassMap[styleObjectHash];
  }

  const id = sheet.cssRules.length.toString(36);
  const className = `css-${id}`;
  const stylesObject = css(systemObject)();

  const styleRulesObject = stylesObjectToRulesObjects(stylesObject);

  const rulesKeys = Object.keys(styleRulesObject).sort(
    (a, b) => (a < b ? -1 : a > b ? 1 : 0)
  );

  rulesKeys.forEach(ruleKey => {
    if (typeof styleRulesObject[ruleKey] === 'string') {
      const selector = ruleKey.replace(/&/g, '.' + className);
      const declaration = styleRulesObject[ruleKey];

      sheet.insertRule(`${selector}{${declaration}}`, sheet.cssRules.length);
    } else {
      const identifier = ruleKey;
      const ruleObject = styleRulesObject[identifier];
      const ruleContent = Object.keys(ruleObject)
        .map(ruleObjectKey => {
          const selector = ruleObjectKey.replace(/&/g, '.' + className);
          const declaration = ruleObject[ruleObjectKey];
          return `${selector}{${declaration}}`;
        })
        .join('');

      sheet.insertRule(`${identifier}{${ruleContent}}`, sheet.cssRules.length);
    }
  });

  systemToClassMap[styleObjectHash] = className;

  return className;
};

const View = ({ as: Component = 'div', css, ...props }) => {
  const className = useClassName(css);
  return <Component className={className} {...props} />;
};

export default ({ table, toPercent }) => (
  <View css={{ display: 'table', mt: 10 }}>
    {table.map((row, i) => (
      <View key={i} css={{ display: 'table-row' }}>
        {row.map((x, j) => (
          <View
            key={`${i}${j}`}
            css={{ display: 'table-cell', p: 10 }}
            style={{ background: `rgba(74, 174, 53, ${x})` }}
          >
            {toPercent(x)}
          </View>
        ))}
      </View>
    ))}
  </View>
);
