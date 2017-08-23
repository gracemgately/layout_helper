import React from 'react';

export const drawBasicNode = (node, toggled, index, highlightIndex) => {
  return (
      <svg>
        <defs>
            <linearGradient id="MyGradient">
              <stop offset="5%" stopColor="white" />
              <stop offset="95%" stopColor="yellow" />
            </linearGradient>
            <linearGradient id="MyGradient2">
              <stop offset="5%" stopColor="orange" />
              <stop offset="95%" stopColor="#db6e08" />
            </linearGradient>
          </defs>
        <circle className={toggled === true && index === highlightIndex ? "yellow" : "none"} key={index} cx="25" cy="25" r="25"> </circle>

        <text x="50%" y="50%" textAnchor="middle" stroke="black " strokeWidth="2px" dy=".3em">{node.value}</text>
      </svg>
  );
}
