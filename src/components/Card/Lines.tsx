'use client';
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }:any) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        lineWidth={9}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.3}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[]}
    />
)
export default function Lines() {
    const data = [
        {
          "id": "japan",
          "color": "hsl(177, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 131
            },
            {
              "x": "helicopter",
              "y": 0
            },
            {
              "x": "boat",
              "y": 70
            },
            {
              "x": "train",
              "y": 17
            },
            {
              "x": "subway",
              "y": 82
            },
            {
              "x": "bus",
              "y": 137
            },
            {
              "x": "car",
              "y": 194
            },
            {
              "x": "moto",
              "y": 131
            },
            {
              "x": "bicycle",
              "y": 118
            },
            {
              "x": "horse",
              "y": 55
            },
            {
              "x": "skateboard",
              "y": 79
            },
            {
              "x": "others",
              "y": 81
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(305, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 105
            },
            {
              "x": "helicopter",
              "y": 198
            },
            {
              "x": "boat",
              "y": 285
            },
            {
              "x": "train",
              "y": 121
            },
            {
              "x": "subway",
              "y": 94
            },
            {
              "x": "bus",
              "y": 174
            },
            {
              "x": "car",
              "y": 19
            },
            {
              "x": "moto",
              "y": 96
            },
            {
              "x": "bicycle",
              "y": 70
            },
            {
              "x": "horse",
              "y": 190
            },
            {
              "x": "skateboard",
              "y": 201
            },
            {
              "x": "others",
              "y": 62
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(195, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 189
            },
            {
              "x": "helicopter",
              "y": 292
            },
            {
              "x": "boat",
              "y": 138
            },
            {
              "x": "train",
              "y": 247
            },
            {
              "x": "subway",
              "y": 119
            },
            {
              "x": "bus",
              "y": 259
            },
            {
              "x": "car",
              "y": 88
            },
            {
              "x": "moto",
              "y": 17
            },
            {
              "x": "bicycle",
              "y": 275
            },
            {
              "x": "horse",
              "y": 205
            },
            {
              "x": "skateboard",
              "y": 64
            },
            {
              "x": "others",
              "y": 235
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(329, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 73
            },
            {
              "x": "helicopter",
              "y": 188
            },
            {
              "x": "boat",
              "y": 136
            },
            {
              "x": "train",
              "y": 134
            },
            {
              "x": "subway",
              "y": 248
            },
            {
              "x": "bus",
              "y": 88
            },
            {
              "x": "car",
              "y": 216
            },
            {
              "x": "moto",
              "y": 12
            },
            {
              "x": "bicycle",
              "y": 190
            },
            {
              "x": "horse",
              "y": 73
            },
            {
              "x": "skateboard",
              "y": 120
            },
            {
              "x": "others",
              "y": 207
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(155, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 42
            },
            {
              "x": "helicopter",
              "y": 27
            },
            {
              "x": "boat",
              "y": 105
            },
            {
              "x": "train",
              "y": 138
            },
            {
              "x": "subway",
              "y": 144
            },
            {
              "x": "bus",
              "y": 204
            },
            {
              "x": "car",
              "y": 17
            },
            {
              "x": "moto",
              "y": 288
            },
            {
              "x": "bicycle",
              "y": 20
            },
            {
              "x": "horse",
              "y": 280
            },
            {
              "x": "skateboard",
              "y": 245
            },
            {
              "x": "others",
              "y": 139
            }
          ]
        }
      ]
  return <Card className="w-full">
  <CardHeader>
  <CardTitle>Lines</CardTitle>
  <CardDescription>These are the stats of this year</CardDescription>
  </CardHeader>
  <CardContent className="h-[120px]">
      <MyResponsiveLine data={data} />
  </CardContent>
</Card>;
}