import facebook from './facebook.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'

export const assets = {
    facebook,
    twitter,
    linkedin
};


export const projects = [
    {
        id: 1,
        title: 'Website Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        startDate: '12-3-2025',
        endDate: '20-3-2025',
        budget: 50,
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Example PDF file
        status: 'In Progress',
    },
    {
        id: 2,
        title: 'Mobile App Design',
        description: 'This project involves designing a user-friendly mobile application interface.',
        startDate: '12-3-2025',
        endDate: '20-3-2025',
        budget: 150,
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/doc/dummy.doc', // Example Word file
        status: 'Completed',
    },
    {
        id: 3,
        title: 'Digital Marketing Campaign',
        description: 'A comprehensive marketing campaign for brand awareness and user engagement.',
        startDate: '12-3-2025',
        endDate: '20-3-2025',
        budget: 80,
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/excel/dummy.xlsx', // Example Excel file
        status: 'Pending',
    },
    {
        id: 4,
        title: 'SEO Optimization Project',
        description: 'Optimizing website content and improving search engine rankings.',
        startDate: '12-3-2025',
        endDate: '20-3-2025',
        budget: 100,
        fileUrl: '', // No file for this project (should not display anything)
        status: 'Started',
    },
];