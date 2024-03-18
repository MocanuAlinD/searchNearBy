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
    padding,
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

  console.log("=================");
  const checkLimit = (x) => {
    if (!x) {
      return;
    } else {
      if (textLeft) {
        const finalLength = _divider <= x && _divider;
        return finalLength;
      } else {
        const finalLength = _divider >= x && 100 - _divider - 1;
        return finalLength;
      }
    }
  };

  // size
  // const _textLengthLimit = textLengthLimit ? +textLengthLimit : 45;
  const defaultWidhtAndHeight = "min(100%, 20rem)";
  const _divider = divider ? +divider : 50;
  const _barHeight = barHeight ? +barHeight : 5;
  const _spacing = spacing ? +spacing : 2.5;
  const _row = _barHeight + _spacing;
  const _size = _row * _values.length + _spacing;
  const _textLengthLimit = checkLimit(textLengthLimit);
  console.log("txtLenLimit ->", textLengthLimit);

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
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient
            id="myGradient"
            gradientTransform="rotate(0)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stop-color={_gradientColor1} />
            <stop offset={_divider + "%"} stop-color={_gradientColor2} />
          </linearGradient>
        </defs>
        {_values.map((item, index) => {
          if (index <= 0) {
            _offset = _spacing;
          } else if (index > 0) {
            _offset = index * _row + _spacing;
          }
          // const _w = (_divider * item) / 100;
          const _w = textLeft
            ? ((100 - _divider) * item) / 100
            : (_divider * item) / 100;
          const _x = textLeft ? _divider : _divider - _w;

          return (
            <rect
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

          const _x = textLeft ? _divider - 0.5 + "%" : _divider + 0.5 + "%";

          return (
            <text
              x={_x}
              y={_offset}
              fill={
                gradient ? _textColor : textColor ? _textColor : fillBar(item)
              }
              fontSize={_fontSize}
              textLength={_textLengthLimit}
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
