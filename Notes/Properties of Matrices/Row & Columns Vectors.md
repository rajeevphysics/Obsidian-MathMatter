
> [!summary]
A matrix has rows and columns. The row vectors are the sub-matrix of a certain row. The column vector sub-matrix of a certain column

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
Row and column vectors come from an $m\times n$ [[Matrix Notation|matrix]] denoted at $A$ below
$$
A
=
\left[
\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1 n} \\
a_{21} & a_{22} & \cdots & a_{2 n}\\
\vdots & \vdots & \ddots & \vdots \\
a_{m 1} & a_{m 2} & \cdots & a_{mn} 
\end{array}
\right]
$$

The row vectors denoted as $r$ are formed from the rows of $A$ with $n$ columns
$$
\begin{array}{c}
r_{1}=\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n}
\end{bmatrix} \\ \\
r_{2}= \begin{bmatrix}
a_{21} & a_{22} & \cdots & a_{2 n} \\
\end{bmatrix} \\  \\
r_{m} = \begin{bmatrix}
a_{m 1} & a_{m 2} & \cdots & a_{mn} 
\end{bmatrix}
\end{array}
$$
These vectors are $\mathbb{R}^n$ since each row vector has $n$ entries

The column vectors denoted as $c$ are formed from the columns of $A$ with $m$ rows
$$
c_{1} = \begin{bmatrix}
a_{11} \\
a_{21} \\
\vdots  \\
a_{m_{1}}
\end{bmatrix}, \quad c_{2} = \begin{bmatrix}
a_{12} \\
a_{22} \\
\vdots  \\
a_{m_{2}}
\end{bmatrix}, \quad c_{n} = \begin{bmatrix}
a_{1n} \\
a_{2n} \\
\vdots  \\
a_{mn}
\end{bmatrix}
$$
These vectors are in $\mathbb{R}^m$ since each column vectors has $m$ entries

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/YtG1gRISbBQ?si=f2W6neb2GpUuBJ7z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>