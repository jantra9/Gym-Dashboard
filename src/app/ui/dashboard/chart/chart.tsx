'use client'
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceDot,
  ResponsiveContainer
} from "recharts";
const data = [
  {
    name: 'Monday',
    uv: 40,
    pv: 40,
    av: 23,
  },
  {
    name: 'Tuesday',
    uv: 30,
    pv: 55,
    av: 28,
  },
  {
    name: 'Wednesday',
    uv: 45,
    pv: 80,
    av: 40,
  },
  {
    name: 'Thursday',
    uv: 10,
    pv: 65,
    av: 60,
  },
  {
    name: 'Friday',
    uv: 55,
    pv: 0,
    av: 78,
  },
  {
    name: 'Saturday',
    uv: 25,
    pv: 20,
    av: 0,
  },
  {
    name: 'Sunday',
    uv: 3,
    pv: 4,
    av: 0,
  },
];

const Chart = ()=>{
    return (
      <div >
      <div className='pt-5 pr-9'>
      <ResponsiveContainer width='100%' height={500}>
        <LineChart data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
        <YAxis domain={[0,90]} tickCount={10} />
        <Tooltip />
        <Legend/>
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line 
          type="monotone" 
          dataKey="uv" 
          stroke="#82ca9d" 
        />
          <Line 
          type="monotone" 
          dataKey="av" 
          stroke="#FC9881 " 
        />
        </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  }

export default Chart;