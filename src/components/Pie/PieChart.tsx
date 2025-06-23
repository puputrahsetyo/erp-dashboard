import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type PieChartProps = {
    data: { label: string; value: number; color?: string }[];
    width?: number;
    height?: number;
    innerRadius?: number;
    outerRadius?: number;
};

const PieChart: React.FC<PieChartProps> = ({
    data,
    width = 300,
    height = 300,
    innerRadius = 0,
    outerRadius = 120,
}) => {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!data.length) return;

        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();

        interface PieChartData {
            label: string;
            value: number;
            color?: string;
        }

        const pie: d3.Pie<unknown, PieChartData> = d3.pie<unknown, PieChartData>()
            .value((d: PieChartData) => d.value);

        const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number; color?: string }>>()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        const arcs = pie(data);

        const g = svg
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        g.selectAll('path')
            .data(arcs)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', (d: d3.PieArcDatum<{ label: string; value: number; color?: string }>) => d.data.color || d3.schemeCategory10[d.index % 10])
            .attr('stroke', '#fff')
            .attr('stroke-width', 0.5);

        const transformText = (d: d3.PieArcDatum<{ label: string; value: number; color?: string }>) => {
            if (d.data.value === 0) return null; // Skip labels for zero values
            if (d.endAngle - d.startAngle < 0.3) return null; // Skip labels for very small slices
            if (d.data.label === '') return null; // Skip empty labels
            // Calculate the position of the label
            const [x, y] = arc.centroid(d);
            return `translate(${x}, ${y})`;
        };

        const textLabels = (d: d3.PieArcDatum<{ label: string; value: number; color?: string }>) => {
            if (d.data.value === 0 || d.endAngle - d.startAngle < 0.3 || d.data.label === '') {
                return null; // Skip labels for zero values, very small slices, or empty labels
            }
            return d.data.label;
        }

        g.selectAll('text')
            .data(arcs)
            .enter()
            .append('text')
            .attr('transform', (d) => transformText(d))
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .style('font-size', '12px')
            .text((d) => textLabels(d));

    }, [data, width, height, innerRadius, outerRadius]);

    return (
        <svg ref={ref} width={width} height={height} />
    );
};

export default PieChart;