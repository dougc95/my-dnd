// mockData.ts
import { Layout } from 'react-grid-layout';

interface Field extends Layout {
    id: number;
    title: string;
}

interface Section {
    id: number;
    fields: Field[];
}

export const mockSections: Section[] = [
    {
        id: 1,
        fields: [
            {
                id: 1,
                title: 'Field 1',
                i: '1',
                x: 0,
                y: 0,
                w: 2,
                h: 1,
            },
            {
                id: 2,
                title: 'Field 2',
                i: '2',
                x: 2,
                y: 0,
                w: 2,
                h: 1,
            },
            {
                id: 3,
                title: 'Field 3',
                i: '3',
                x: 4,
                y: 0,
                w: 2,
                h: 1,
            },
        ],
    },
    {
        id: 2,
        fields: [
            {
                id: 4,
                title: 'Field 4',
                i: '4',
                x: 0,
                y: 0,
                w: 3,
                h: 1,
            },
            {
                id: 5,
                title: 'Field 5',
                i: '5',
                x: 3,
                y: 0,
                w: 3,
                h: 1,
            },
        ],
    },
    {
        id: 3,
        fields: [
            {
                id: 6,
                title: 'Field 6',
                i: '6',
                x: 0,
                y: 0,
                w: 2,
                h: 1,
            },
            {
                id: 7,
                title: 'Field 7',
                i: '7',
                x: 2,
                y: 0,
                w: 2,
                h: 1,
            },
            {
                id: 8,
                title: 'Field 8',
                i: '8',
                x: 4,
                y: 0,
                w: 2,
                h: 1,
            },
            {
                id: 9,
                title: 'Field 9',
                i: '9',
                x: 6,
                y: 0,
                w: 2,
                h: 1,
            },
        ],
    },
];