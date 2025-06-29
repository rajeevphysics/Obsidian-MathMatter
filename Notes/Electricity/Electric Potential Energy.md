
>[!summary]
Electric potential energy is the potential energy per unit charge.
>
It is a scalar and doesn't have direction
>
Electric potential energy refers to how much energy a charge will have to produce in order to get somewhere. Charges always want to have low electric potential energy
>
**Key equations:**
>
**Potential energy:**
$\Delta V=\frac{\Delta U}{q_0}=-\int_a^b E\cdot ds$
>
**Electric field to a single point charge:**
$V=\frac{kq}{r}$
>
**Electric field inside a conducting sphere:**
$E = \frac{Qr}{4\pi R^3 \epsilon_0}$
>
**Electric potential inside a conducting sphere:**
$V(b) = \frac{Q}{8\pi \epsilon_0 R} (3-\frac{r^2}{R^2})$

>[!info]+ Read Time
**⏱ 3 mins**
# Important Distinction 
>[!warning]
**Not the same as [[Electric Potential]]**
Electric potential energy is like gravitational potential energy  ([[Gravitational Potential energy]])

It's the potential energy per unit charge (scalar) **doesn't depend of the sign of q** and is to describe the field ([[Charges]])

$$\Delta V=\frac{\Delta U}{q_0}=-\int_a^b E\cdot ds$$
# What is Electric Potential Energy
>[!bug] Distinction
The electric potential refers to where a particle naturally wants to be in a electric field and describes the amount of energy to get there
**Electric potential is always in reference to some point.**

This describes the amount of energy needed to move a charge.

If the particle **naturally** want to move (Its electric potential energy is the lowest) **against the path of the field**, we say this is **towards higher potential**

If the particle **naturally** wants to be **towards** the **path of the field**, we say it's towards **lower** **potential energy**.

![[ep_2.png]]
[^1]
>[!note] Explanation
Example of a point charge in a electric field. 
>
The path against the electric field is high potential energy since it would **require a lot of energy** to move that charge against the field.
>
The path towards the electric field is low energy since it would require a **less energy** to move that charge there.

## Potential Due to a Single Point Charge
>[!warning] Assumptions
The electric potential is to describe the amount of energy the particle has at a given point. 
>
We will assume the following is true:
>- From [[Electric Potential]] $U = \frac{kqq_0}{r}$
>- The [[Electric Potential Energy]] is $\Delta V=\frac{\Delta U}{q_0}$

$$\begin{array}{c}
V = \frac{\Delta U}{q_0} \\ 
\Delta U = \frac{kq q_0}{r} \\ 
V=\frac{kq}{r}
\end{array}$$


# Electric Potential Inside a Conducting Sphere
For a conducting sphere we need to assume the following for electric potential.
>[!bug] Assumptions 
>- Our reference point V(a) is at the surface.
>- Charges are distributed around the surface but not in the actually conductor.

For a conducting sphere all the charge is centred around the surface. The [[Electric Field]] inside the field is always zero because there is no charge enclosed inside the sphere (By [[Gauss's Law]] the E = 0). 

By the $\Delta V = -\int E \cdot ds$ 
$V_0$ is always zero in the electric field
but because $\Delta V = V_R - V_0$ our $V_R$ will have a value at the surface, and hence is always having the same electric potential.
![[ep_1.png]]
[^2]
>[!note] Explanation
Electric potential for a conducting sphere
Note that after were outside the sphere, well assume the sphere as a point mass and so can use $V = kq/r$
# Electric Potential Inside A Non-Conducting Sphere
>[!warning] Assumptions 
For a non-conducintg sphere we will assume the following:
>- For a non-conducting sphere, the charges will be distrubted on the charge density throughout.
>- To find the [[Electric Field]] we will use [[Gauss's Law]] 

For a non-conducting sphere the electric field will change depending on how much area you enclose in and how that charge is distrusted.

>[!warning] Assumed equations
We'll assume the density is $\rho = \frac{Q}{\frac{4}{3}\pi R^3}$ and our volume $V = \frac{4}{3}\pi r^3$ 
So our Q_enc at any pint is $Q_{enc} = \frac{Qr^3}{R^3}$

So by gausses law our electric field will be:

$$\begin{array}{c}
\oint E \cdot dA = \frac{Q_{enc}}{\epsilon_0} \\ 
\text{Well assume a spherical area of gassian surfrace} \\ 
E \cdot 4\pi r^2 = \frac{Q_{enc}}{\epsilon_0}   \\ 
E = \frac{Q_{enc}}{4\pi r^2\epsilon_0}  \\ 
E = \frac{Qr}{4\pi R^3 \epsilon_0}
\end{array}$$

>[!bug] Assumption
To find our electric potential were going to assume that our reference point V(a) at the surface is $V(a) = \frac{Q}{4 \pi \epsilon _0 R}$  

so now:

$$\begin{array}{c}
\Delta V = -\int E\cdot ds \\ 
V(b) -V(a) = -\int E\cdot ds \\ 
V(b) = V(a) - \int_r ^R \frac{Qr}{4\pi R^3\epsilon _0} dr \\
\text{Intergrate in terms of r } \\ 
V(b) = \frac{Q}{8\pi \epsilon_0 R} (3-\frac{r^2}{R^2})
\end{array}$$

Our electric field will increase as r from the centre and peaks at R, decreasing as $1/r^2$after.

[^1]: Taken from https://tikz.net/electric_field/ by  Izaak Neutelings (July 2018)

[^2]: Taken from https://tikz.net/electric_potential_plots/ by  Izaak Neutelings (February 2020)

---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---
