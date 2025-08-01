import "./MonthlyChart.css"

function MonthlyChart() {
  return (
    <div>
      <div className="stat-card">
        <div className="stat-card-header">
          <div className="stat-card-title">Monthly Revenue</div>
          <div className="menu-wrapper">
            <input className="menu-toggle" id="menu-toggle" type="checkbox" />
            <label className="menu-dots" for="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="menu-select">
              <div>View</div>
              <div>Edit</div>
              <div>Delete</div>
            </div>
          </div>
        </div>
        <div className="stat-card-chart">
          <svg className="linechart" viewBox="0 0 360 120">
            <defs>
              <linearGradient y2="1" x2="0" y1="0" x1="0" id="lineGradient">
                <stop stop-color="#3d8bff" offset="0%"></stop>
                <stop stop-color="#1ecb6b" offset="100%"></stop>
              </linearGradient>
              <linearGradient y2="1" x2="0" y1="0" x1="0" id="areaGradient">
                <stop
                  stop-opacity="0.3"
                  stop-color="#3d8bff"
                  offset="0%"
                ></stop>
                <stop
                  stop-opacity="0"
                  stop-color="#1ecb6b"
                  offset="100%"
                ></stop>
              </linearGradient>
              <linearGradient y2="1" x2="0" y1="0" x1="0" id="tooltipGradient">
                <stop
                  stop-opacity="0.95"
                  stop-color="#3d8bff"
                  offset="0%"
                ></stop>
                <stop
                  stop-opacity="0.95"
                  stop-color="#1ecb6b"
                  offset="100%"
                ></stop>
              </linearGradient>
              <filter height="140%" width="140%" y="-20%" x="-20%" id="glow">
                <feGaussianBlur
                  result="coloredBlur"
                  stdDeviation="3"
                ></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            s
            <path
              fill="url(#areaGradient)"
              d="M15,90 L45,40 L75,60 L105,35 L135,60 L165,80 L195,60 L225,70 L255,40 L285,60 L315,50 L345,70 L345,120 L15,120 Z"
            ></path>
            <polyline
              filter="url(#glow)"
              points="15,90 45,40 75,60 105,35 135,60 165,80 195,60 225,70 255,40 285,60 315,50 345,70"
              stroke-width="4"
              stroke="url(#lineGradient)"
              fill="none"
            ></polyline>
            <g className="dot-group">
              <circle fill="#3d8bff" r="6" cy="90" cx="15"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="54"
                  x="5"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="74"
                  x="40"
                >
                  Jan: 12
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#3d8bff" r="6" cy="40" cx="45"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="4"
                  x="10"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="24"
                  x="45"
                >
                  Feb: 40
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#3d8bff" r="6" cy="60" cx="75"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="24"
                  x="40"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="44"
                  x="75"
                >
                  Mar: 28
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#3d8bff" r="6" cy="35" cx="105"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="-5"
                  x="70"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="15"
                  x="105"
                >
                  Apr: 50
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#3d8bff" r="6" cy="60" cx="135"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="24"
                  x="100"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="44"
                  x="135"
                >
                  May: 30
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#1ecb6b" r="6" cy="80" cx="165"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="44"
                  x="130"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="64"
                  x="165"
                >
                  Jun: 18
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#1ecb6b" r="6" cy="60" cx="195"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="24"
                  x="160"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="44"
                  x="195"
                >
                  Jul: 22
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#1ecb6b" r="6" cy="70" cx="225"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="34"
                  x="190"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="54"
                  x="225"
                >
                  Aug: 25
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#1ecb6b" r="6" cy="40" cx="255"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="4"
                  x="220"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="24"
                  x="255"
                >
                  Sep: 38
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#1ecb6b" r="6" cy="60" cx="285"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="24"
                  x="250"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="44"
                  x="285"
                >
                  Oct: 27
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#1ecb6b" r="6" cy="50" cx="315"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="14"
                  x="280"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="34"
                  x="315"
                >
                  Nov: 32
                </text>
              </g>
            </g>
            <g className="dot-group">
              <circle fill="#1ecb6b" r="6" cy="70" cx="345"></circle>
              <g className="tooltip">
                <rect
                  opacity="0.92"
                  fill="#232733"
                  rx="8"
                  height="32"
                  width="70"
                  y="34"
                  x="285"
                ></rect>
                <text
                  font-weight="500"
                  font-size="15"
                  fill="#fff"
                  text-anchor="middle"
                  y="54"
                  x="320"
                >
                  Dec: 20
                </text>
              </g>
            </g>
            <g fill="#b0b6c3" font-size="12" className="x-labels">
              <text text-anchor="middle" y="115" x="15">
                Jan
              </text>
              <text text-anchor="middle" y="115" x="45">
                Feb
              </text>
              <text text-anchor="middle" y="115" x="75">
                Mar
              </text>
              <text text-anchor="middle" y="115" x="105">
                Apr
              </text>
              <text text-anchor="middle" y="115" x="135">
                May
              </text>
              <text text-anchor="middle" y="115" x="165">
                Jun
              </text>
              <text text-anchor="middle" y="115" x="195">
                Jul
              </text>
              <text text-anchor="middle" y="115" x="225">
                Aug
              </text>
              <text text-anchor="middle" y="115" x="255">
                Sep
              </text>
              <text text-anchor="middle" y="115" x="285">
                Oct
              </text>
              <text text-anchor="middle" y="115" x="315">
                Nov
              </text>
              <text text-anchor="middle" y="115" x="345">
                Dec
              </text>
            </g>
          </svg>
        </div>
        <div className="stat-card-legend">
          <div className="legend-item">
            <span>Average monthly sale for every author</span>
          </div>
          <div className="legend-item">
            <span className="legend-value">68.9%</span>
            <span className="legend-change">▲ 34.5%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyChart
