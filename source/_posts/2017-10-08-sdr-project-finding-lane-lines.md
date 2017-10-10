---
title: Self Driving Car - Project Finding Lane Lines on the Road
date: 2017-10-08 22:27:53
tags: ["Self Driving Car"]
---

# Setting up the Problem
Features for lane lines detection
- Color
- Shape
- Orientation
- Position

# Color Selection
- Color channel
  - 0 darkest possible value
  - 255 brightest possible value
  - White in RGB: `[255, 255, 255]`

```python
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np

# Read in the image and print out some stats
image = mpimg.imread('test.jpg')
print('This image is: ',type(image),
         'with dimensions:', image.shape)

# Grab the x and y size and make a copy of the image
ysize = image.shape[0]
xsize = image.shape[1]
# Note: always make a copy rather than simply using "="
color_select = np.copy(image)

# Define our color selection criteria
red_threshold = 200
green_threshold = 200
blue_threshold = 200
rgb_threshold = [red_threshold, green_threshold, blue_threshold]

# Identify pixels below the threshold
thresholds = (image[:,:,0] < rgb_threshold[0]) \
            | (image[:,:,1] < rgb_threshold[1]) \
            | (image[:,:,2] < rgb_threshold[2])
# Retain pixels that are above the threshold
# Black out pixels that are below the threshold
color_select[thresholds] = [0,0,0]

# Display the image
plt.imshow(color_select)
plt.show()

# Save image
# mpimg.imsave("test-after.png", color_select)
```

| Original | After color selection |
|----------|-----------------------|
| {% img /images/2017-10-08-sdr-project-finding-lane-lines/color-selection-original.jpg 492 276 %} | {% img | /images/2017-10-08-sdr-project-finding-lane-lines/color-selection-after-color-selection.png 492 276 %} |

# Region Masking

# Color and Region Masking

# Finding Lines of Any Color

# Canny Edge Detection

# Canny to Detect Lane Lines

# Hough Transform

# Hough Transform to Find Lane Lines

# Project Intro

# Starter Kit Installation
