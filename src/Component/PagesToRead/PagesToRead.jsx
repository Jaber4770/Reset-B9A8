import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const PagesToRead = () => {

    const BookData = useLoaderData();


    const getReadingListFromLs = () => {
        const readingList = localStorage.getItem("readingList");
        return readingList ? JSON.parse(readingList) : [];
    }


    const getMachedBook = (bookIds, allBooks) => {
        return allBooks.filter(book => bookIds.includes(book.id));
    }

    const readingList = getReadingListFromLs();
    const getMatchedBooks = getMachedBook(readingList, BookData);

    getMatchedBooks.forEach(``)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = BookData.map(book => ({
        name: book.bookName,
        uv: book.totalPages
    }));

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };


    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='bg-white'>
            <div className='container mx-auto'>
                <div style={{ width: '100%', height: 600 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default PagesToRead;