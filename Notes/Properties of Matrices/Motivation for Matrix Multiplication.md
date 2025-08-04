
> [!summary]
This note shows an analytical reason why matrix multiplication is done the way it is.

>[!info]+ Read Time
**⏱ 3 mins**

# Motivation 
> [!warning] Assumptions 
This motivation for matrix multiplication is not a proof of matrix multiplication, but rather an intuitive idea for why the [[!! Properties of Matrix Multiplication|properties of matrix multiplication]] are true. To create motivation this assume the following:
> - A [[Linear Equations|linear equation]] is written as $a_{1}x_{1} + a_{2}x_{2} \dots a_{n}x_{n}=b$
> - The [[Matrix Notation|coefficient]] part of the linear equations can be written as a [[! Matrix-Vector Multiplication|matrix-vector multiplication]] 
> - A [[Vectors Addition & Multiplication|vector]] can have components  $\vec{v}=\begin{bmatrix} x_{1}  \\ x_{2}\end{bmatrix}$

$$
\begin{array}{c} \\
\text{Suppose there are two linear equations} \\
y_{1} = ax_{1}+bx_{2} \\
y_{2} = cx_{1}+dx_{2} \\ \\

\text{Now consider another set of linear equations that are written in terms of the above} \\
z_{1} =Ay_{1} +By_{2} \\
z_{2}= Cy_{1} + Dy_{2} \\

\end{array}
$$

> [!bug] Goal 
The goal is to write the $z$ linear equations in terms of the variables $x$. 
>  $$
\begin{align*}
z_{1 } &= \boxed{\phantom{a}} x_{1}+ \boxed{\phantom{a}}x_{2} \\
z_{2} &= \boxed{\phantom{a}} x_{1}+ \boxed{\phantom{a}}x_{2}
\end{align*}
> $$
Where the boxes are the coefficient the goal of this motivation is to find

$$
\begin{array}{c}
\text{The linear equations $y_{1},y_{2}$ can be subbed into the linear equations $z_1,z_2$} \\ 
\begin{align*}
z_1 &= A(ax_1+bx_2) + B(cx_{1}+dx_{2}) \\
&= (Aa+Bc)x_{1} + (Ab+Bd)x_{2} \\
\\
z_{2}&= C(ax_{1}+bx_{2})+ D(cx_{1}+dx_{2}) \\
&= (Ca + Dc)x_{1} + (Cb+Dd)x_{2}
\end{align*}
\\ \\
\text{So then this can be written as a matrix vector multipcation}\\
\boxed{\begin{pmatrix}
Aa + Bc &Ab+Bd  \\
Ca + Dc & Cb + Dd
\end{pmatrix} 
\begin{pmatrix}
x_{1}  \\
x_{2}
\end{pmatrix} = \begin{pmatrix}
z_{1}  \\
z_{2}
\end{pmatrix} } \\
\text{Keep note of this} \\ \\
\text{Now, the set of $y$ linear equations can be rewritten as a matrix-vector multiplication} \\
\\

\begin{pmatrix}
y_{1} \\
y_{2}
\end{pmatrix} = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix} \begin{pmatrix}
x_{1} \\
x_{2}
\end{pmatrix}
\\ \\
\text{The set of $z$ linear equations can also be rewritten as a matrix-vector multiplication} \\ 
\begin{pmatrix}
z_{1} \\
z_{2}
\end{pmatrix} = \begin{pmatrix}
A & B \\
C & D
\end{pmatrix} \begin{pmatrix}
y_{1} \\
y_{2}
\end{pmatrix} \\ 
\\
\text{So combining these two gives the result} \\
\boxed{\begin{pmatrix}
A & B  \\
C & D
\end{pmatrix} \begin{pmatrix}
a & b  \\
c & d
\end{pmatrix} \begin{pmatrix}
x_{1} \\
x_{2}
\end{pmatrix} = \begin{pmatrix}
z_{1}  \\
z_{2}
\end{pmatrix}}
\\ \\ \\
\text{If the two boxed equations equal $\vec{z}$, then this comes to a conclusion that}\\
\begin{pmatrix}
A & B  \\
C & D
\end{pmatrix} \begin{pmatrix}
a & b  \\
c & d
\end{pmatrix}  = \begin{pmatrix}
Aa + Bc &Ab+Bd  \\
Ca + Dc & Cb + Dd
\end{pmatrix} 
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/cc1ivDlZ71U?si=-XS42RHGgdXS1wqC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>