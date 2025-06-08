
>[!summary]
Electric potential energy is amount of energy a particle will have at a given location.
>
A particle will naturally want to be in its lowest energy state.
>
**Key equations:**
>
**Work of electric potential:**
$W = \int{F \cdot ds}$
>
**Electric potential energy of two point charges:**
$U=\frac{kqq_0}{r}$

# What is the Electric Potential 
>[!warning]
**This is not the same as [[Electric Potential Energy]]**

Electric potential energy explains how "willing" a charge wants to naturally be in a [[Electric Field]]. 

We often describe this as the amount of work to bring a charge somewhere. 

For somewhere a charge dosent want to be you would require more work to get there.
For somewhere a charge wants to be you would require less work or negative work.

# Point charges in Electric fields
![[elpe_1.png]]
[^1]
>[!note] Explanation
An electric field points down with a positive charge being moved downwards overtime.

The charge will **Naturally** go to the negative charge plate. So the charges potential energy **decreases.**
# Work of Electric Potential & Deriving Electric Potential  
The work of a electric field on a particle is independent of the path the particles take and is found through integrating the displacement, if we assume the force is always constant.
$$W = \int{F \cdot ds}$$

In this derivation we will assume the following:
Work is positive
The [[Electric Force]] is $F = qE$
From [[Coulombs Law]] the $E = \frac{q}{4\pi r^2 \epsilon _0}$
Work from [[Work, Energy & Power]] is $W = \int_r ^{r_f} F(r) \cdot dx$
The [[Electric Field]] is constant 

![[elpe_2.png]]
>[!note] Explanation
Work done the electric field is independent of the path it takes (gray dotted lines)
With the force being with the direction of the field 

$$\begin{array}{c}
W = \int_r ^{r_f} F(r) \cdot ds \\ 
W = \int_r ^{r_f}qE \cdot ds \\ 

\\
\text{Remeber $W = -\Delta U$} \\ 
\Delta U = -\int_r ^{r_f}qE \cdot ds  \\ 
\Delta U = -q_1Er \\ 
\Delta U = -q_1 ( \frac{q_2}{4\pi r^2 \epsilon _0}) (r) \\ 
\Delta U = \frac{-q_1 q_2}{4\pi r \epsilon _0}
\end{array}$$


[^1]: Taken from https://tikz.net/electric_field/ by Izaak Neutelings (July 2018)

