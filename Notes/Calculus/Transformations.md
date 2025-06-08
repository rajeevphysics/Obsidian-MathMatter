
>[!summary]
Functions that are shifted are move from this original position, but are not deformed.
>
Functions that are compressed, stretched or reflected are deformed from their original function.

**Generalization:**

| Function       | Transformation                                                                       | Mapping                  |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------ |
| $y = f(x) + k$ | If $k > 0$ translation is up<br>If $k < 0$ translation is down                       | $(x,y) \mapsto (x,y+k)$  |
| $y = f(x-h)$   | If $h > 0$ the translation is to the right<br>If $h < 0$ the translation is the left | $(x,y) \mapsto (x+h, y)$ |

| Function    | Transformation                                                     | Mapping                         |
| ----------- | ------------------------------------------------------------------ | ------------------------------- |
| $y = -f(x)$ | Reflection of x-axis                                               | $(x,y) \mapsto (x,-y)$          |
| $y = f(-x)$ | Relfection of y-axis                                               | $(x,y) \mapsto (-x,y)$          |
| $y = af(x)$ | Vertical stretch by a factor of \|a\|                              | $(x,y) \mapsto (x,ay)$          |
| $y = f(bx)$ | Horizontal Stretch by a factor of $\frac{1}{\left \| b \right \|}$ | $(x,y) \mapsto (\frac{x}{b},y)$ |

# Shifts 
Function shifts are when a function is shifted up or down. When a function is shifted the shifted form is not manipulated in a way that deforms it from the original function. Other than it being displaced differently from the original function, it is fundamentally the same.  
## Proof
Suppose we have a function f(x) whose function plotted looks like this on a table and graph.

| x   | f(x) |
| --- | ---- |
| 1   | 1    |
| 2   | 2    |
| 3   | 3    |
| 4   | 4    |
![[desmos-graph.png]]

>[!warning] Assumptions 
Assume we use the same function f(x) (same table outputs)

Now lets effect the function by subtracting the **output** of **f(x)**. Let's subtract by 1 for this example.

| x   | f(x) - 1 |
| --- | -------- |
| 1   | 0        |
| 2   | 1        |
| 3   | 2        |
| 4   | 3        |
>[!info] Notice
Notice that when we subtract the output of f(x) the graph is **vertically** effected (The output is effected)

In a graph this looks like
![[desmos-graph (1).png]]

>[!warning] Assumptions 
Assume we use the same function f(x) (same table outputs)

Now lets we effect the function **before the output of f(x)**. Lets assume by subtracting by 1 before the output.

| x   | f(x-h) |
| --- | ------ |
| 1   | 0      |
| 2   | 1      |
| 3   | 2      |
| 4   | 3      |
>[!info] Notice
That effecting the input of the function before the output effects the graph horizontally. 

![[desmos-graph (2).png]]

## Generalization

| Function       | Transformation                                                                       | Mapping                  |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------ |
| $y = f(x) + k$ | If $k > 0$ translation is up<br>If $k < 0$ translation is down                       | $(x,y) \mapsto (x,y+k)$  |
| $y = f(x-h)$   | If $h > 0$ the translation is to the right<br>If $h < 0$ the translation is the left | $(x,y) \mapsto (x+h, y)$ |

# Stretching, Compression & Reflections 
When a function is stretched, compressed or reflected the new function is deformed. It is **physically** different from the original function.

## Proof
Suppose we have a function with a output in a form such as $y = f(x^2)$. Assume this is true for the following parts. Below a table and graph of this function.

| x   | $f(x^2)$ |
| --- | -------- |
| 1   | 1        |
| 2   | 4        |
| 3   | 9        |
| 4   | 16       |
![[desmos-graph (3).png]]

Now suppose we effect this function by multiplying by a variable or sign we get the following result and its graph. For this proof, lets change the original function above to **multiplying** our **output by negative 1**. 

>[!warning] Notice
Be sure to be aware how the multiplying the input vs output is different just how changing the shift of the input vs output is different as well.

| x   | $-f(x^2)$ |
| --- | --------- |
| 1   | -1        |
| 2   | -4        |
| 3   | -9        |
| 4   | -16       |
![[desmos-graph (4).png]]

Now lets look at our original function again and **multiply our input** **by -1**.

>[!warning] Notice
Be sure to be aware how the multiplying the input vs output is different just how changing the shift of the input vs output is different as well.

| x   | $-x^2$ | $f(-x^2)$ |
| --- | ------ | --------- |
| 1   | -1     | 1         |
| 2   | -2     | 4         |
| 3   | -3     | 9         |
| 4   | -4     | 16        |
![[desmos-graph (5).png]]

>[!info] Assumed New original function
For this next proof well assume our original function is $y = f(|x|)$ with the table and graph being below. We do this to better visualize the next proof part of strenching and compressions.

| x   | f(\|x\|) | y   |
| --- | -------- | --- |
| -2  | 2        | 2   |
| -1  | 1        | 1   |
| 0   | 0        | 0   |
| 1   | 1        | 1   |
| 2   | 2        | 2   |
![[desmos-graph (6).png]]

Now using our new original function, lets multiply that input by -2.

>[!warning] Notice
A increase in our output compared to the original function we note this as a compression, because the graphs looks more condensed. 

| x   | f(\|x\|) | f(\|-2x\|) | y   |
| --- | -------- | ---------- | --- |
| -2  | 2        | 4          | 4   |
| -1  | 1        | 2          | 2   |
| 0   | 0        | 0          | 0   |
| 1   | 1        | 2          | 2   |
| 2   | 2        | 4          | 4   |
![[desmos-graph (7).png]]

Now using our original function once more. Lets multiply our output by -2. Notice how the two graphs differ.

| x   | f(\|x\|) | -2f(\|x\|) | y   |
| --- | -------- | ---------- | --- |
| -2  | 2        | -4         | -4  |
| -1  | 1        | -2         | -2  |
| 0   | 0        | 0          | 0   |
| 1   | 1        | -2         | -2  |
| 2   | 2        | -4         | -4  |
![[desmos-graph (8).png]]

## Generalization

| Function    | Transformation                                                     | Mapping                         |
| ----------- | ------------------------------------------------------------------ | ------------------------------- |
| $y = -f(x)$ | Reflection of x-axis                                               | $(x,y) \mapsto (x,-y)$          |
| $y = f(-x)$ | Relfection of y-axis                                               | $(x,y) \mapsto (-x,y)$          |
| $y = af(x)$ | Vertical stretch by a factor of \|a\|                              | $(x,y) \mapsto (x,ay)$          |
| $y = f(bx)$ | Horizontal Stretch by a factor of $\frac{1}{\left \| b \right \|}$ | $(x,y) \mapsto (\frac{x}{b},y)$ |
