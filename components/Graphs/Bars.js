import React from "react";

const Bars = (props) => {
  const {
    barHeight,
    bg,
    border,
    borderC,
    borderR,
    borderW,
    colors,
    divider,
    fontSize,
    fontWeight,
    gradient,
    gradientColor1,
    gradientColor2,
    height,
    margin,
    obj,
    overflow,
    padding,
    rotate,
    spacing,
    textColor,
    textLeft,
    textLengthLimit,
    width,
  } = props;

  const _colors = colors
    ? colors
    : ["#c81d25", "#ff5a5f", "#8d99ae", "#087e8b", "#0b3954"];

  const _obj = obj
    ? obj
    : {
        Brăila: 50,
        Brașov: 25,
        București: 30,
        Cluj: 45,
        Constanța: 10,
        Craiova: 40,
        "Drobeta-Turnu Severin": 20,
        Timișoara: 35,
        Tulcea: 100,
      };

  const _values = Object.values(_obj);
  const _keys = Object.keys(_obj);

  // size
  const defaultWidhtAndHeight = "min(100%, 20rem)";
  const _divider = divider ? +divider : 50;
  const _barHeight = barHeight ? +barHeight : 5;
  const _spacing = spacing ? +spacing : 2.5;
  const _row = _barHeight + _spacing;
  const _size = _row * _values.length + _spacing;

  const _textLengthLimit = textLeft
    ? textLengthLimit
      ? _divider <= textLengthLimit && _divider - 1
      : _divider <= 30 && _divider - 1
    : textLengthLimit
    ? _divider >= textLengthLimit && 100 - _divider - 1
    : _divider >= 70 && 100 - _divider - 1;

  // font and color
  const _textColor =
    textColor === true || textColor === undefined || !textColor.length
      ? "whitesmoke"
      : textColor;
  const _fontSize = fontSize
    ? fontSize >= _barHeight
      ? _barHeight
      : +fontSize
    : _barHeight;
  const _fontWeight = fontWeight ? fontWeight : 200;
  const _gradientColor1 = gradientColor1 ? gradientColor1 : "#70e000";
  const _gradientColor2 = gradientColor2 ? gradientColor2 : "#004b23";

  const fillBar = (sz) => {
    if (sz <= 20) {
      return _colors[0];
    } else if (sz > 20 && sz <= 40) {
      return _colors[1];
    } else if (sz > 40 && sz <= 60) {
      return _colors[2];
    } else if (sz > 60 && sz <= 80) {
      return _colors[3];
    } else if (sz > 80 && sz <= 100) {
      return _colors[4];
    }
  };

  let _offset;

  return (
    <div
      style={{
        border:
          border &&
          `${borderW ? borderW : 1}px solid ${borderC ? borderC : "#909090"}`,
        width: width ? width : defaultWidhtAndHeight,
        height: height ? height : defaultWidhtAndHeight,
        borderRadius: borderR ? borderR : "0",
        margin: margin ? margin : "",
        transform: `rotate(${rotate ? rotate : 0}deg)`,
      }}
    >
      <svg
        id="graphSvg"
        viewBox={`0 0 100 ${_size}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{
          padding: padding ? padding : "1rem",
          backgroundColor: bg ? bg : "#080808",
          borderRadius: borderR ? borderR : "0",
          overflow: overflow ? overflow : "hidden",
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
        </defs>
        {_values.map((item, index) => {
          if (index <= 0) {
            _offset = _spacing;
          } else if (index > 0) {
            _offset = index * _row + _spacing;
          }
          const _w = textLeft
            ? ((100 - _divider) * item) / 100
            : (_divider * item) / 100;
          const _x = textLeft ? _divider : _divider - _w;

          return (
            <rect
              key={index}
              x={_x}
              y={_offset}
              width={_w + "%"}
              height={_barHeight}
              fill={gradient ? "url(#myGradient)" : fillBar(item)}
            />
          );
        })}

        {_values.map((item, index) => {
          if (index === 0) {
            _offset = _spacing + _barHeight / 2;
          } else if (index > 0) {
            _offset = index * _row + _barHeight / 2 + _spacing;
          }

          const _x = textLeft ? _divider + "%" : _divider + "%";

          return (
            <text
              key={index}
              x={_x}
              y={_offset}
              fill={
                gradient ? _textColor : textColor ? _textColor : fillBar(item)
              }
              fontSize={_fontSize}
              textLength={_textLengthLimit || undefined}
              textAnchor={textLeft ? "end" : "start"}
              dominantBaseline="central"
              fontWeight={_fontWeight}
            >
              {_keys[index]}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default Bars;
