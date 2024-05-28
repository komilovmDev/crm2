import { useMemo } from "react";
import * as d3 from "d3";
import React from "react";
import './pay.css'

type DataItem = {
    name: string;
    value: number;
};
type DonutChartProps = {
    width: number;
    height: number;
    data: DataItem[];
};

const MARGIN = 40;

const colors = [
    "#005EEB",
    "#C2DAFF",
];
 

const DonutChart = ({ width, height, data }: DonutChartProps) => {
    const radius = Math.min(width, height) / 2 - MARGIN;

    const pie = useMemo(() => {
        const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
        return pieGenerator(data);
    }, [data]);

    const arc = useMemo(() => {
        return d3.arc<any, d3.PieArcDatum<DataItem>>()
            .innerRadius(80)
            .outerRadius(radius);
    }, [radius]);

    const labels = useMemo(() => {
        return pie.map(p => {
            const centroid = arc.centroid(p);
            return { centroid, data: p.data };
        });
    }, [pie, arc]);

    return (
        <div className="Chart">
            <p className="ChartTitle">Payment status</p>
            <svg width={width} height={height} style={{ display: "inline-block" }}>
                <g transform={`translate(${width / 2}, ${height / 2})`}>
                    {pie.map((p, i) => (
                        <g key={i}>
                            <path d={arc(p)} fill={colors[i]} />
                            <text
                                x={labels[i].centroid[0]}
                                y={labels[i].centroid[1]}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize=".6vw"
                                fill="#fff"
                            >
                                {labels[i].data.value}%
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
            <div className="Paymentstext">
                <p>Payments</p>
            </div>
            <div className="PaymentMiniBox">
                <div className="Paid">
                    <div className="Paid-SpanT"></div>
                    <p>Paid</p>
                </div>
                <div className="NotPaid">
                    <div className="Paid-Span"></div>
                    <p>Not Paid</p>
                </div>
            </div>
        </div>
    );
};

export default DonutChart;