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
    view,
    width,
  } = props;

  const percentage = ["0%", "20%", "40%", "60%", "80%", "100%"];

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
        Tulcea: 98,
        Arad: 12,
      };

  const _values = Object.values(_obj);
  const _keys = Object.keys(_obj);
  const _defaultWidhtAndHeight = "min(100%, 20rem)";

  // size
  const _space = 5;
  const _view = view ? +view : 200;

  const outOfRange = divider < 0 ? 0 : divider > _view ? _view : divider;

  const _divider = divider ? (+outOfRange * +_view) / 100 : +_view / 2;
  const _barHeight = barHeight ? +barHeight : 5;
  const _spacing = spacing ? +spacing : 5;
  const _row = _barHeight + _spacing;
  const _height = _row * _values.length + _spacing;
  const allWidth = _view + _space * 2;
  const allHeight = _height + _space * 2;

  const _textLengthLimit = textLeft
    ? textLengthLimit
      ? _divider <= textLengthLimit && _divider - 2
      : _divider <= (30 * _view) / 100 && _divider - 2
    : textLengthLimit
    ? _divider >= textLengthLimit && _view - _divider - 2
    : _divider >= (70 * _view) / 100 && _view - _divider - 2;

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
        width: width ? width : _defaultWidhtAndHeight,
        height: height ? height : _defaultWidhtAndHeight,
        borderRadius: borderR ? borderR : "0",
        margin: margin ? margin : "",
        transform: `rotate(${rotate ? rotate : 0}deg)`,
        overflow: "visible",
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
          backgroundColor: bg ? bg : "#080808",
          borderRadius: borderR ? borderR : "0",
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
          <polyline
            points={`0 0 ${_view} 0 ${_view} ${_height} 0 ${_height} 0 0 `}
            fill="none"
            stroke="red"
            strokeWidth="0.2"
            id="conturView"
          />
          <line
            x1={_divider}
            y1="0"
            x2={_divider}
            y2={_height}
            fill="none"
            stroke="red"
            strokeWidth="0.2"
            id="dividerLine"
          />
        </defs>
        <g>
          <use href="#conturView" />
          <use href="#dividerLine" />
        </g>

        {_values.map((item, index) => {
          if (index <= 0) {
            _offset = _spacing;
          } else if (index > 0) {
            _offset = index * _row + _spacing;
          }
          const wRight = ((_view - _divider) * item) / 100;
          const wLeft = (_divider * item) / 100;
          const _w = textLeft ? wRight : wLeft;
          const _x = textLeft ? _divider : _divider - _w;
          return (
            <rect
              key={index}
              x={_x}
              y={_offset}
              width={_w}
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



        
      </svg>
    </div>
  );
};

export default Bars;
