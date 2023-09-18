import { LineChart, Line,XAxis,YAxis } from 'recharts';
const LifeChart = () => {

    const studentData = [
        { id: 1, name: "John Smith", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Emily Johnson", math: 78, physics: 85, chemistry: 88 },
        { id: 3, name: "Michael Davis", math: 92, physics: 88, chemistry: 92 },
        { id: 4, name: "Sarah Brown", math: 64, physics: 72, chemistry: 76 },
        { id: 5, name: "David Wilson", math: 76, physics: 80, chemistry: 84 },
        { id: 6, name: "Sophia Lee", math: 88, physics: 90, chemistry: 91 },
        { id: 7, name: "Matthew Taylor", math: 71, physics: 68, chemistry: 74 },
        { id: 8, name: "Olivia Martinez", math: 95, physics: 92, chemistry: 96 },
        { id: 9, name: "William Jackson", math: 82, physics: 79, chemistry: 88 },
        { id: 10, name: "Emma Harris", math: 70, physics: 75, chemistry: 81 }
      ];
      
      

    return (
        <div>
    <LineChart width={700} height={400} data={studentData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"math"}></Line>
        <Line dataKey={"physics"} stroke="red"></Line>
        <Line dataKey={"chemistry"}  stroke="purple"></Line>
    </LineChart>

        </div>
    );
};

export default LifeChart;