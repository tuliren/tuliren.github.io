---
title: Self Driving Car - Project 01 Report
date: 2017-10-27 01:07:48
tags: ["Self Driving Car"]
---

Links
- [Project repository](https://github.com/tuliren/CarND-LaneLines-P1)
- [Python notebook](https://github.com/tuliren/CarND-LaneLines-P1/blob/master/P1.ipynb)
- [Original report](https://github.com/tuliren/CarND-LaneLines-P1/blob/master/project_report.md)


Finding Lane Lines on the Road
====

## Goal
The goals / steps of this project are the following:
* Make a pipeline that finds lane lines on the road
* Reflect on the work in a written report

## Results
- Image analysis pipeline

  ![](test_images_output/intermediate-solidWhiteCurve.jpg)

- Lane detection

  Solid White Line | Solid Yellow Line | Challenge
  ---------------- | ----------------- | ---------
  ![](test_videos_output/solidWhiteRight.gif) | ![](test_videos_output/solidYellowLeft.gif) | ![](test_videos_output/challenge.gif)
  [Video](https://github.com/tuliren/CarND-LaneLines-P1/blob/master/test_videos_output/solidWhiteRight.mp4) | [Video](https://github.com/tuliren/CarND-LaneLines-P1/blob/master/test_videos_output/solidYellowLeft.mp4) | [Video](https://github.com/tuliren/CarND-LaneLines-P1/blob/master/test_videos_output/challenge.mp4)

## Implementation
[Notebook](P1.ipynb)

## Reflection

### Lane detection pipeline

My pipeline consisted of the following steps:
- Convert the image to gray scale.
- Apply Gaussian blur.
- Perform Canny transform to detect edges.
- Create a polygon image mask to focus on the lane line area.
- Use Hough line transform to detect lines in the masked area.

In order to draw a single line on the left and right lanes, the `draw_lines` function is modified as described below.
- Lines are separated into two groups, one group for lines with positive slopes, the other with negative slopes.
- Within each group, all lines are consolidated into one line as follows (in the `draw_one_lane_line` function).
  - Lines with proper slope are selected. The slope range is (0.35, 0.85) and (-0.85, -0.35).
  - Lines with positive slopes must reside on the left hand side of the image, vice versa for lines with negative slopes. The criteria is that the intercept of a line with the top of the mask polygon should be roughly on one side of the image.
  - Lines are then sorted by slope.
  - The line with median slope is chosen as the pivot line.
  - All lines close to the pivot line are selected. Here closeness means their difference in slope is less than 0.5.
  - The slope and intercept values of the selected lines are averaged together to get a mean slope and intercept, which is considered the final lane line.
    - I choose to average on all lines close to the pivot line hoping that this will make the final lane line more "stabilized", meaning that it does not shake too much from frame to frame in the video. But it is not as useful as I thought. The result does not change much if I just use the pivot line as the final output.
  - Intercepts of this lane line and the masked area are calculated, and then drawn to the image.

### Potential shortcomings and possible improvements

- Generated lines shakes from frame to frame
  - The lane lines from my video output shake a lot in the video. I noticed that whenever there are small white dots besides the actual line, the generated line tends to shift slightly towards those dots. They are not as stable as those shown in the sample video. 
    - A **possible improvement** is to create every new line based on the line in the previous frame. This is based on the assumption that actual lane line does not have sharp curves, so the slope of the generated lines should not differ significantly from one frame to another.

- Generated lines are not robust to road color and shadows
  - From the output of the challenge video, my current pipeline is not robust when the road has a light color and it is sunny. For those cases, the actual lane line almost disappears in gray scale and Canny image. Here is an example:
    ![](/test_images_output/intermediate-lightRoadColor.jpg)
    - A **possible improvement** is to enhance white and yellow color before converting the image to gray scale.

  - Also shadows on the road can severely interfere with lane detection. Shadow introduces considerable amount of white dots in the Canny image such that the correct line is no longer the median line.
    ![](/test_images_output/intermediate-roadShadow.jpg)
    - A **possible improvement** is to further tune the Canny thresholds. Another possible approach is to select the pivot line not by simply choosing the median one, but chose one that appears in a cluster of lines.
