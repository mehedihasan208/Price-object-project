import { PieChart,Pie } from 'recharts';

const Picharts = () => {
    const pieChartData = [
        { category: "Pizza", value: 30 },
        { category: "Burgers", value: 15 },
        { category: "Salads", value: 25 },
        { category: "Pasta", value: 10 },
        { category: "Sushi", value: 20 },
      ];
      
  
      const pieChartData2 = [
        { category: "Ice Cream", value: 20 },
        { category: "Tacos", value: 12 },
        { category: "Steak", value: 28 },
        { category: "Sushi", value: 15 },
        { category: "Pasta", value: 25 },
      ];
      
      
    return (
        <div>
    <PieChart width={730} height={250}>
    <Pie data={pieChartData} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={pieChartData2} dataKey="value" nameKey="category" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
           
        </div>
    );
};

export default Picharts;