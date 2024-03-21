import React from "react";

// todo
{
  /* add variable to change toFixed decimals */
}

const Bars = (props) => {
  const {
    addHeight,
    barHeight,
    bg,
    border,
    borderC,
    borderR,
    borderW,
    borderViewColor,
    barColors,
    conturView,
    divider,
    dividerLine,
    fontSize,
    fontWeight,
    fullBar,
    fullBarColor,
    fullBarDasharray,
    fullBarWidth,
    gradient,
    gradientColor1,
    gradientColor2,
    height,
    margin,
    obj,
    overflow,
    padding,
    percentFontSize,
    percentColor,
    percentWeight,
    percentOffset,
    percentLineColor,
    percentLineWidth,
    rotate,
    spacing,
    textColor,
    textLeft,
    textLengthLimit,
    valueTextColor,
    valueFontSize,
    view,
    width,
    range,
  } = props;

  const _obj = obj
    ? obj
    : {
        Kiribati: 25,
        Greenland: 50,
        Guinea: 75,
        "Dominican Republic": 100,
        "French Guiana": 125,
        Egypt: 150,
        Bahrain: 175,
        Mauritius: 272,
        Andorra: 225,
        "Timor-Leste": 250,
        Guam: 275,
      };

  {
    /* INDEPENDENT */
  }
  // =========================================================================
  const _addHeight = addHeight ? (addHeight < 0 ? 0 : +addHeight) : 0;
  const baseColorLight = "#ddd";
  const baseColorDark = "#080808";
  const defaultFontSize = 3;
  const _percentFontSize = percentFontSize ? percentFontSize : 2.5;
  const _percentWeight = percentWeight ? percentWeight : "200";
  const _percentColor = percentColor ? percentColor : baseColorDark;
  const _percentOffset = percentOffset
    ? percentOffset < 0
      ? 0.5
      : percentOffset > 5
      ? 5
      : percentOffset
    : 1.5;
  const _percentLineColor = percentLineColor ? percentLineColor : baseColorDark;
  const _percentLineWidth = percentLineWidth ? percentLineWidth : "0.1";
  const _fontWeight = fontWeight ? fontWeight : 200;
  const _gradientColor1 = gradientColor1 ? gradientColor1 : "#588157";
  const _gradientColor2 = gradientColor2 ? gradientColor2 : "#344e41";
  const _borderViewColor = borderViewColor ? borderViewColor : baseColorDark;
  const _defaultWidhtAndHeight = "min(100%, 40rem)";
  const _space = 5;
  const _view = view ? +view : 100;
  const _textColor =
    textColor === true || textColor === undefined || !textColor.length
      ? baseColorDark
      : textColor;
  const maxObjValue = Math.max(...Object.values(_obj));
  const objValues = Object.values(_obj);

  // shrinked down to max 100 all the values.
  const _values = Object.values(_obj).map((item) => {
    const a = (item * 100) / maxObjValue;
    return +a.toFixed(2);
  });

  const _keys = Object.keys(_obj);
  const _barColors = barColors
    ? barColors
    : ["#c81d25", "#ff5a5f", "#8d99ae", "#087e8b", "#0b3954"];
  const _fullBarColor = fullBarColor ? fullBarColor : baseColorDark;
  const _fullBarDasharray = fullBarDasharray ? fullBarDasharray : "1";
  const _fullBarWidth = fullBarWidth ? fullBarWidth : "0.1";
  const _valueTextColor = valueTextColor ? valueTextColor : baseColorLight;
  const _valueFontSize = valueFontSize ? valueFontSize : defaultFontSize;

  // get percentage calculation
  const getv = () => {
    const newVals = [];
    let a = 50;
    // check if range is < 0 or > 100
    if (range && +range < 1) {
      a = 50;
    } else if (range && +range > 100) {
      a = 100;
    } else {
      a = +range;
    }

    // add values to the list
    for (let i = 0; i <= 100; i += a) {
      if (!newVals.includes(+i.toFixed())) {
        newVals.push(+i.toFixed(2));
      }
    }

    // if 100 is not in the list, add it
    if (!newVals.includes(100)) {
      newVals.push(100);
    }
    return newVals;
  };

  const to100 = (x) => {
    const vl = (x * _view) / 100;
    return vl;
  };

  const percentage = range ? getv() : [0, 25, 50, 75, 100];

  // =========================================================================
  const outOfRange = divider < 0 ? 0 : divider > _view ? _view : divider;

  const _divider = divider ? (+outOfRange * +_view) / 100 : +_view / 2;
  const _barHeight = barHeight ? +barHeight : 5;
  const _spacing = spacing ? +spacing : 1.25;
  const _row = _barHeight + _spacing;
  const _height = _row * _values.length + _spacing;
  const allWidth = _view + _space * 2;
  const allHeight =
    _height + _space * 2 + +_percentFontSize + +_percentOffset + _addHeight;

  // SECTION WIDTH
  const _sectionWidth = textLeft
    ? ((_view - _divider) * _view) / 100
    : _divider;

  const _textLengthLimit = textLeft
    ? textLengthLimit
      ? _divider <= +textLengthLimit && to100(_divider) - 2
      : _divider <= 30 && _divider - 2
    : textLengthLimit
    ? _divider >= 100 - +textLengthLimit && 100 - _divider - 2
    : _divider >= 70 && 100 - to100(_divider) - 2;

  // font and color
  const _fontSize = fontSize
    ? fontSize >= _barHeight
      ? _barHeight
      : +fontSize
    : _barHeight / 1.5;

  const fillBar = (sz) => {
    if (sz <= 20) {
      return _barColors[0];
    } else if (sz > 20 && sz <= 40) {
      return _barColors[1];
    } else if (sz > 40 && sz <= 60) {
      return _barColors[2];
    } else if (sz > 60 && sz <= 80) {
      return _barColors[3];
    } else if (sz > 80 && sz <= 100) {
      return _barColors[4];
    }
  };

  let _offset;
  let _offsetPercentNumber;

  return (
    <div
      style={{
        border:
          border &&
          `${borderW ? borderW : 1}px solid ${borderC ? borderC : "#909090"}`,
        width: width ? width : _defaultWidhtAndHeight,
        height: height ? height : _defaultWidhtAndHeight,
        borderRadius: borderR ? borderR : "1rem",
        margin: margin ? margin : "0",
        transform: `rotate(${rotate ? rotate : 0}deg)`,
        overflow: "hidden",
      }}
    >
      <svg
        id="graphSvg"
        viewBox={`${-_space} ${-_space} ${allWidth} ${allHeight}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{
          padding: padding ? padding : "1rem",
          backgroundColor: bg ? bg : "#ddd",
          overflow: overflow ? overflow : "visible",
        }}
      >
        <defs>
          <linearGradient
            id="myGradient"
            gradientTransform="rotate(0)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={textLeft ? _divider + "%" : "0%"}
              stopColor={textLeft ? _gradientColor1 : _gradientColor2}
            />
            <stop
              offset={textLeft ? "100%" : _divider + "%"}
              stopColor={textLeft ? _gradientColor2 : _gradientColor1}
            />
          </linearGradient>

          <line
            x1={_divider}
            y1="0"
            x2={_divider}
            y2={_height}
            fill="none"
            stroke="#f00"
            strokeWidth="0.2"
            id="dividerLine"
          />
        </defs>
        {dividerLine && <use href="#dividerLine" />}

        {/* fullBar */}
        {fullBar &&
          _values.map((item, index) => {
            if (index <= 0) {
              _offset = _spacing + _barHeight / 2;
            } else if (index > 0) {
              _offset = index * _row + _spacing + _barHeight / 2;
            }

            const iRight = _divider + ((_view - _divider) * item) / 100;
            const iLeft = _divider - (item * _divider) / 100;

            const x1 = textLeft ? iRight : 0;
            const x2 = textLeft ? _view : iLeft;

            return (
              <g key={index}>
                <line
                  x1={x1}
                  y1={_offset}
                  x2={x2}
                  y2={_offset}
                  stroke={_fullBarColor}
                  strokeDasharray={_fullBarDasharray}
                  strokeWidth={_fullBarWidth}
                />
              </g>
            );
          })}

        {/* vertical percentage text and line */}
        {percentage.map((item, index) => {
          const n = (_sectionWidth * item) / 100;
          const x = textLeft ? _divider + n : _divider - n;
          return (
            <g key={index}>
              <line
                x1={x}
                y1="0"
                x2={x}
                y2={_height}
                fill="none"
                stroke={_percentLineColor}
                strokeWidth={_percentLineWidth}
              />
              <text
                x={x}
                y={_height}
                fill={_percentColor}
                fontSize={_percentFontSize}
                fontWeight={_percentWeight}
                transform={`rotate(90 ${x}, ${_height})`}
                dominantBaseline="central"
                dx={_percentOffset}
              >
                {item} %
              </text>
            </g>
          );
        })}

        {/* percentage BAR and text over */}
        {_values.map((item, index) => {
          if (index <= 0) {
            _offset = _spacing;
            _offsetPercentNumber = _spacing + _barHeight / 2;
          } else if (index > 0) {
            _offset = index * _row + _spacing;
            _offsetPercentNumber = index * _row + _barHeight / 2 + _spacing;
          }

          const wRight = ((_view - _divider) * item) / 100;
          const wLeft = (_divider * item) / 100;
          const _w = textLeft ? wRight : wLeft;
          const _x = textLeft ? _divider : _divider - _w;
          return (
            <g key={index}>
              <rect
                x={_x}
                y={_offset}
                width={_w}
                height={_barHeight}
                fill={gradient ? "url(#myGradient)" : fillBar(item)}
              />
              <text
                x={textLeft ? _divider + 0.5 : _divider - 0.5}
                y={_offsetPercentNumber}
                fill={_valueTextColor}
                fontSize={_valueFontSize}
                textAnchor={textLeft ? "start" : "end"}
                fontWeight="200"
                dominantBaseline="central"
              >
                {objValues[index]}
              </text>
            </g>
          );
        })}

        {/* country */}
        {_values.map((item, index) => {
          if (index === 0) {
            _offset = _spacing + _barHeight / 2;
          } else if (index > 0) {
            _offset = index * _row + _barHeight / 2 + _spacing;
          }

          return (
            <text
              key={index}
              x={_divider}
              y={_offset}
              fill={
                gradient ? _textColor : textColor ? _textColor : fillBar(item)
              }
              fontSize={_fontSize}
              textLength={_textLengthLimit || undefined}
              textAnchor={textLeft ? "end" : "start"}
              dominantBaseline="central"
              fontWeight={_fontWeight}
              dx={textLeft ? "-1" : "1"}
            >
              {_keys[index]}
            </text>
          );
        })}

        {/* border view */}
        {conturView && (
          <g>
            <line
              x1="0"
              y1="0"
              x2={_view}
              y2="0"
              fill="none"
              stroke={_borderViewColor}
              strokeWidth="0.2"
            />
            <line
              x1="0"
              y1={_height}
              x2={_view}
              y2={_height}
              fill="none"
              stroke={_borderViewColor}
              strokeWidth="0.2"
            />
            {textLeft ? (
              <line
                x1="0"
                y1="0"
                x2="0"
                y2={_height}
                fill="none"
                stroke={_borderViewColor}
                strokeWidth="0.2"
              />
            ) : (
              <line
                x1={_view}
                y1="0"
                x2={_view}
                y2={_height}
                fill="none"
                stroke={_borderViewColor}
                strokeWidth="0.2"
              />
            )}
          </g>
        )}
      </svg>
    </div>
  );
};

export default Bars;
