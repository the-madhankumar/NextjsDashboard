"use client";
import { ResponsiveAreaBump } from '@nivo/bump';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

interface Datum {
    id: string;
    data: { x: string; y: number }[];
}

const MyResponsiveAreaBump = ({ data }: { data: Datum[] }) => (
    <ResponsiveAreaBump
        data={data.map(series => ({
            id: series.id,
            data: series.data.map(datum => ({
                x: datum.x,
                y: datum.y
            }))
        }))}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        startLabel={(d) => d.id}
        endLabel={(d) => d.id}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
    />
);
export default function General() {
    const data: Datum[] = [
        {
            "id": "Serie 1",
            "data": [
                {
                    "x": "2000",
                    "y": 9
                },
                {
                    "x": "2001",
                    "y": 7
                },
                {
                    "x": "2002",
                    "y": 9
                },
                {
                    "x": "2003",
                    "y": 8
                },
                {
                    "x": "2004",
                    "y": 2
                }
            ]
        },
        {
            "id": "Serie 2",
            "data": [
                {
                    "x": "2000",
                    "y": 10
                },
                {
                    "x": "2001",
                    "y": 2
                },
                {
                    "x": "2002",
                    "y": 11
                },
                {
                    "x": "2003",
                    "y": 12
                },
                {
                    "x": "2004",
                    "y": 3
                }
            ]
        },
        {
            "id": "Serie 3",
            "data": [
                {
                    "x": "2000",
                    "y": 12
                },
                {
                    "x": "2001",
                    "y": 5
                },
                {
                    "x": "2002",
                    "y": 7
                },
                {
                    "x": "2003",
                    "y": 4
                },
                {
                    "x": "2004",
                    "y": 5
                }
            ]
        },
        {
            "id": "Serie 4",
            "data": [
                {
                    "x": "2000",
                    "y": 2
                },
                {
                    "x": "2001",
                    "y": 12
                },
                {
                    "x": "2002",
                    "y": 10
                },
                {
                    "x": "2003",
                    "y": 3
                },
                {
                    "x": "2004",
                    "y": 1
                }
            ]
        },
        {
            "id": "Serie 5",
            "data": [
                {
                    "x": "2000",
                    "y": 5
                },
                {
                    "x": "2001",
                    "y": 9
                },
                {
                    "x": "2002",
                    "y": 3
                },
                {
                    "x": "2003",
                    "y": 10
                },
                {
                    "x": "2004",
                    "y": 10
                }
            ]
        },
        {
            "id": "Serie 6",
            "data": [
                {
                    "x": "2000",
                    "y": 11
                },
                {
                    "x": "2001",
                    "y": 8
                },
                {
                    "x": "2002",
                    "y": 5
                },
                {
                    "x": "2003",
                    "y": 9
                },
                {
                    "x": "2004",
                    "y": 11
                }
            ]
        },
        {
            "id": "Serie 7",
            "data": [
                {
                    "x": "2000",
                    "y": 8
                },
                {
                    "x": "2001",
                    "y": 10
                },
                {
                    "x": "2002",
                    "y": 6
                },
                {
                    "x": "2003",
                    "y": 1
                },
                {
                    "x": "2004",
                    "y": 9
                }
            ]
        },
        {
            "id": "Serie 8",
            "data": [
                {
                    "x": "2000",
                    "y": 6
                },
                {
                    "x": "2001",
                    "y": 11
                },
                {
                    "x": "2002",
                    "y": 1
                },
                {
                    "x": "2003",
                    "y": 6
                },
                {
                    "x": "2004",
                    "y": 7
                }
            ]
        },
        {
            "id": "Serie 9",
            "data": [
                {
                    "x": "2000",
                    "y": 4
                },
                {
                    "x": "2001",
                    "y": 1
                },
                {
                    "x": "2002",
                    "y": 12
                },
                {
                    "x": "2003",
                    "y": 7
                },
                {
                    "x": "2004",
                    "y": 4
                }
            ]
        },
        {
            "id": "Serie 10",
            "data": [
                {
                    "x": "2000",
                    "y": 3
                },
                {
                    "x": "2001",
                    "y": 6
                },
                {
                    "x": "2002",
                    "y": 8
                },
                {
                    "x": "2003",
                    "y": 5
                },
                {
                    "x": "2004",
                    "y": 8
                }
            ]
        },
        {
            "id": "Serie 11",
            "data": [
                {
                    "x": "2000",
                    "y": 1
                },
                {
                    "x": "2001",
                    "y": 4
                },
                {
                    "x": "2002",
                    "y": 2
                },
                {
                    "x": "2003",
                    "y": 11
                },
                {
                    "x": "2004",
                    "y": 6
                }
            ]
        },
        {
            "id": "Serie 12",
            "data": [
                {
                    "x": "2000",
                    "y": 7
                },
                {
                    "x": "2001",
                    "y": 3
                },
                {
                    "x": "2002",
                    "y": 4
                },
                {
                    "x": "2003",
                    "y": 2
                },
                {
                    "x": "2004",
                    "y": 12
                }
            ]
        }
    ]
    return <Card className="w-full">
        <CardHeader>
        <CardTitle>This week</CardTitle>
        <CardDescription>These are the results of this week</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 h-[300px]">
        <MyResponsiveAreaBump data={data} />
        </CardContent>
        </Card>;
}