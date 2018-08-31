import React from 'react';
import PropTypes from 'prop-types';

function SpectrumChart(props) {
  let { width } = props;
  let { lowerBound, upperBound } = props.range;

  let numberOfUnits = upperBound - lowerBound;
  let pixelsPerUnit = width / numberOfUnits;

  let adjustedPoint = props.point - lowerBound;
  let indicatorOffset = adjustedPoint * pixelsPerUnit;

  if (indicatorOffset > width) {
    indicatorOffset = width;
  } else if (indicatorOffset < 0) {
    indicatorOffset = 0;
  }

  let indicatorStyle = {
    transform: `translateX(${indicatorOffset}px)`
  }

  let chartLabels = props.labels
    .sort((a, b) => {
      return a.lowerBound > b.lowerBound;
    })
    .map((label) => {
      let sizeInUnits = label.upperBound - label.lowerBound;
      let labelWidth = sizeInUnits * pixelsPerUnit;
    
      let labelStyle = {
        display: 'inline-block',
        width: `${labelWidth}px`,
        textAlign: `${label.align || 'left'}`,
        color: `${label.color || '#000'}`,
        fontSize: '14px'
      }
      return {
        ...label,
        style: labelStyle
      };
    });

  return (
    <div className="chart" style={{...props.style}}>
      <span className="chart__indicator" style={indicatorStyle}></span>
      {chartLabels && chartLabels.map((label) => {
        return (<span style={label.style}>{label.label}</span>)
      })}
    </div>
  );
}

SpectrumChart.propTypes = {
  style: PropTypes.object,
  width: PropTypes.number,
  range: PropTypes.object,
  point: PropTypes.number,
  labels: PropTypes.array
};

export default SpectrumChart;
