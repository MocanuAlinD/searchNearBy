import React from "react";

const Bars = (props) => {
  const {
    obj,
    divider,
    barHeight,
    spacing,
    colors,
    fontSize,
    fontWeight,
    width,
    height,
    border,
    padding,
    borderR,
    bg,
    borderW,
    borderC,
  } = props;

  const _obj = obj
    ? obj
    : {
        Braila: 50,
        Brasov: 85,
        Bucuresti: 30,
        Cluj: 90,
        Constanta: 10,
        Craiova: 70,
        "Drobeta-Turnu Severin": 20,
        Timisoara: 35,
        Tulcea: 100,
      };
  const _divider = divider ? +divider : 50;
  const _values = Object.values(_obj);
  const _keys = Object.keys(_obj);
  const _barHeight = barHeight ? +barHeight : 7;
  const _spacing = spacing ? +spacing : 1;
  const _row = _barHeight + _spacing;
  const _size = _row * _values.length + _spacing;
  const _colors = colors
    ? colors
    : ["#c81d25", "#ff5a5f", "#8d99ae", "#087e8b", "#0b3954"];
  const _fontSize = fontSize
    ? fontSize >= _barHeight
      ? _barHeight
      : +fontSize
    : _barHeight;
  const _fontWeight = fontWeight ? fontWeight : 200;

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
        width: width ? width : "100%",
        border:
          border &&
          `${borderW ? borderW : 1}px solid ${borderC ? borderC : "#909090"}`,
        height: height ? height : "100%",
        borderRadius: borderR ? borderR : "0",
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
        }}
      >
        {_values.map((item, index) => {
          if (index <= 0) {
            _offset = _spacing;
          } else if (index > 0) {
            _offset = index * _row + _spacing;
          }
          const _w = (_divider * item) / 100;
          const _x = _divider - _w;

          return (
            <rect
              x={_x}
              y={_offset}
              width={_w + "%"}
              height={_barHeight}
              fill={fillBar(item)}
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
              x={_divider + 0.5 + "%"}
              y={_offset}
              fill={fillBar(item)}
              fontSize={_fontSize}
              textLength={_divider <= 55 ? "none" : 100 - _divider - 0.5}
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
