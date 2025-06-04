
>[!summary]
Electric potential is the potential energy per unit charge.
>
It is a scalar and doesn't have direction
>
Electric potential refers to where a particle naturally will want to be in a reference of a electric field.
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


>[!warning]
**Not the same as [[Electric Potential energy]]**

Potential energy is like gravitonal potential energy  ([[Gravitational Potential energy]])

It's the potential energy per unit charge (scalar) doe**snt depend of the sign of q** and is to describe the field ([[Charges]])

$$\Delta V=\frac{\Delta U}{q_0}=-\int_a^b E\cdot ds$$

our electric force is U = qV
where V is the potential energy per unit of charge.
Note:
$$1\frac{N}{C}={V}$$
# Important distinction
>[!bug] Distinction
The electric potential refers to where a particle naturally wants to be in a electric field

If the particle **naturally** want to move (Its electric potential energy is the lowest) **against the path of the field**, we say this is **towards higher potential**

If the particle **naturally** wants to be **towards** the **path of the field**, we say it's towards **lower** **potential energy**.

Electric potential is always in refernce to some point. So if assume V(a) as a starting point in a electric field. 
![[Pasted image 20250421073046.png]]
So:

$$\begin{array}{c} 
\Delta V = -\int E\cdot ds  \\ 
V(b) - V(a) = -\int E\cdot ds \\ \\
For \space V(b) > V(a):\\
-\int E\cdot ds  > 0  \\ 
For \space V(b) < V(a): \\ 
-\int E\cdot ds < 0


\end{array}$$
**When V(b) > V(a)** this means that particle will feel a force by the electric field opposite in the direction of the electric field. Hence that integral is negative  (negative * negative = positive). It naturally wants to be there, but its in a high electric potential.

**When V(b) < V(a)** this means the particle feels a force by the electric field in the direction of the electric field, hence the integral is negative. It naturally want to be there but is in a low (negative) electric potential.

# Potential Due to a SINGLE point charge
The electric potential is to describe the field around a particle, so for one charge we define it as the electric potential energy over a charge 
>[!info] Note
**This is a scalar and has no direction**

$$\begin{array}{c}
V = \frac{\Delta U}{q_0} \\ 
\Delta U = \frac{kq q_0}{r} \\ 
V=\frac{kq}{r}
\end{array}$$

This describes the amount of work done on one unit of charge to move it 
# Electric Potential inside a Conducting Sphere
For a conducting sphere we need to assume the following for electric potential.

>[!bug] Assumptions 
>- Our reference point V(a) is at the surface.
>- Charges are distributed around the surface but not in the actually conductor.

For a conducting sphere all the charge is centred around the surface. The [[Electric Field]] inside the field is always zero because there is no charge enclosed inside the sphere (By [[Gauss's Law]] the E = 0). 

By the $\Delta V = -\int E \cdot ds$ 
V(b) is always zero in the electric field
but because $\Delta V = V(b) - V(a)$ our V(a) will have a value at the surface, and hence is always having the same electric potential.

![[Pasted image 20250601135815.png]]

Note that after were ourside the sphere, well assume the sphere as a point mass and so can use $V = kq/r$
# Electric Potential Inside A Non-Conducting Sphere
For a non-conducintg sphere we will assume the following:
- For a non-conducting sphere, the charges will be distrubted on the charge density throughout.
- To find the [[Electric Field]] we will use [[Gauss's Law]] 

For a non-conducting sphere the electric field will change depdening on how much area you enclose in and how that charge is distrusted.

We'll assume the density is $\rho = \frac{Q}{\frac{4}{3}\pi R^3}$ and our volume $V = \frac{4}{3}\pi r^3$ 
So our Q_enc at any pint is $Q_{enc} = \frac{Qr^3}{R^3}$

![[Pasted image 20250421083351.png]]
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

Our electric field will increase as r from the centre and peaks at R, decreasing as 1/r^2 after.

The potential energy will peak at the centre, and decreases over distance.
![[Pasted image 20250421085820.png]]
>[!note] Explanation
The electric field and electric potential of a non-coducting sphere.
