
>[!summary]
The electric field is how the electric potential changes over time.
>
The electric field for points charges depend on the charge, where positive will be pointed away.
>
The electric field created by the dipole will always point from the + to - charge.
>
**Force per charge:**
$E=\frac{F}{q}$
>
**Electric field for a uniform charged line:**
$E = \frac{kQ}{x(x^2+a^2)^{1/2}}$
>
**Electric field for a uniform charged ring:**
$E = \frac{kQx}{(x^2 + a^2)^{3/2}}$
>
**Electric field for a uniform charged disk:**
$E = \frac{2kQx}{R^2}(\frac{1}{x}-\frac{1}{\sqrt{x^2 + R^2}})$

>[!info]+ Read Time
**⏱ 5 mins**
# Electric field 
> [!warning] Definition Misconception 
Electric field and electric potential are fundamentally different! 

The electric field is how the [[Electric Potential Energy]] changes with time. Often we assume the electric field to be constant and describes how a charge moves over a period of time.

We define this as the force per unit of charge:
$$E=\frac{F}{q}$$

How fast the potential energy ([[Electric Potential Energy]]) is changing 
$$\begin{array}{c}
\Delta V = E\Delta S \\ 
\left|\vec E\left|=\frac{\Delta V}{\Delta S}\right.\right.
\end{array}$$

We often use this to define our the electric field is changing in a charge, such as how the electric field changes inside a conducting sphere vs outside.

![[efield_1.png]]
[^1]
>[!note] Explanation
The electric field inside a sphere will always be zero. (Not like the electric potential )

**Electric is always zero inside a conducting sphere because all the charge is accumulated on the outside of the sphere.** 

>[!bug] Conducting Vs. Non-Conducting Sphere
The electric field of a conducting sphere and non-conducting sphere are different.
>
For a non-conducting sphere the electric field is like this:
![[efield_2.png]]
The charges are disturbed around inside the sphere, so there is electric field inside the sphere, where it peaks at R, the surface of the sphere.

# Electric field for point charges
If we want to know the electric field created by a single point charge the electric field is. The r hat is dependent of the direction from [[Charges]]

$$E = \frac{kq}{r^2}\hat{r}$$
![[efield_3.png]][^1]
>[!note] Explanation
The electric field of a postive charge will always point away from the charge.

>[!warning]
Note that the electric field vector is tangent to the electric field lines.

# Electric Fields of Dipoles
Electric field lines of a dipole always point from the + charges to - charge.

![[dip_2.png | 500]]
[^2]
>[!note] Explanation
Electric field of a dipole

If we wanted to find electric fields at point we could use the electric field for point charges.

# Electric field of Uniform Charged Line
If we had an electric field some distance x away and we had a definite line of Q. To find the electric field we have to integrate over each dq.

>[!warning] Assumptions 
For this we are going to assume the following:
>- Were going to spilt the whole length of Q into two segments a, and -a.
>- Because we spilt it into two section the Y components from both ends will cancel out, we only need to worry about the x direction
>
>- The charge density is $\rho = \frac{dq}{dl}$ and $\rho = Q / 2a$

![[Pasted image 20250601123613.png]]
We need to find dq so we find that from
$$\begin{array}{c} 
\rho = \frac{dq}{dl} \\ 
\frac{Q}{2a} = \frac{dq}{dl} \\ 
\frac{Q}{2a} dl = dq
\end{array}$$
Now we find a small chunk of dE.
Note that the r direction is the hypotenuse of the x and y component.
$$\begin{array}{c} 
dE = k \frac{dq}{r^2}\\
dE = k \frac{Qdy}{2a(x^2+y^2)} \\ 
\text{Note because the y direction of dE will always cancel out} \\ 
\text{We only consider the x compment of dE} \\ 
dE_x = dEcos(\alpha) \\ 
dE_x = \frac{kQxdy}{2a(x^2 + y^2)^{3/2}}\\\
E = \int_{-a} ^ a dE_x  \\ 
E = \frac{kQ}{x(x^2+a^2)^{1/2}}

\end{array}$$
# Electric Field due to a Uniform Charged ring
If how now have a ring of Q and want to find the electric field at some point x. 
![[Pasted image 20250601123910.png]]

>[!warning] Assumptions 
Were going to assume the following:
>- The ring is centred around the axis, so that the electric field at any point in the y-axis will always cancel. 
>- The charges around the ring are uniform
>- The charge density ($\rho$) is $\rho = Q / L = Q \ 2\pi a$ if we assume the radius is a 
>- Note that the charge density is also the rate of chage of our charges over distance.

Our dq of charges can be solved from knowing the charge density
$$\begin{array}{c} 
\rho = \frac{dq}{dl} \\ 
\rho = \frac{Q}{2\pi a} \\ 
so:
\\ 
dq = \rho dl \\dq = \frac{Q}{2\pi a} dl \\
\text{Because our charge is a ring} \\ 
L = a\phi \\ 
dl = ad\phi \\ 
dq = \frac{Qad\phi}{2\pi a}
\end{array}$$

>[!bug] Symmetry Argument 
Since we now know our dq we can solve for dE and dE in the x direction. Note that the y direction of a electric field will always cancel because we are using the symmetry argument that our ring is centre around the axis.

$$\begin{array}{c}
dE = k \frac{dq}{r^2} \\ 
dE = \frac{kQd\phi}{2\pi (x^2 + a^2)} \\
dE_x = dEcos(\theta) \\ 
dE_x = \frac{kQxd\phi}{2\pi (x^2 + a^2)^{3/2}}\\ 
\text{Than we intergrate over the ring in term of $d\phi$} \\ 
E = \int dE_x \\ 
E = \frac{kQx}{2\pi (x^2 + a^2)^{3/2}}\int_0 ^{2\pi} d\phi \\ 
E = \frac{kQx}{(x^2 + a^2)^{3/2}}
\end{array}$$

# Electric field for a Uniform Charged Disk
If we have a charge uniformly distributed over a disk and want the electric field over some distance along the x-axis
![[Pasted image 20250601124234.png]]

>[!warning] Assumptions 
Were going to assume the following:
>- Our charge density $\rho$ is defined as the Total charge / Total area and is the rate of change of our charge.
>- If the disk is centred around the origin, we're going to assume that the electric will cancel out in the y-direction.

To find dQ we do:
$$\begin{array}{c}
\rho = \frac{dq}{dA} \\ 
\rho = \frac{Q}{\pi R^2}\\
dq = \rho dA  \\ 
dq = dA \frac{Q}{\pi R^2} \\ 
\text{Note that $A = \pi r^2 $} \\ 
dq = \frac{2\pi Q rdr}{\pi R^2}
\end{array}$$

Then our electric field is, note that r is the hyp distance, and we will assume it is ($x^2 +y^2$)
$$\begin{array}{c} 
dE = \frac{kdq}{r^2}  \\ 
dE = \frac{kdq}{(x^2+y^2)^2}\\
dE_x = dEcos(\theta) \\ 
dE_x = \frac{kdq}{(x^2+y^2)^{3/2}} \\ 
dE_x = \frac{2kxQrdr}{R^2(x^2+y^2)^{3/2}} \\ 
E = \int dE_x \\
E = \frac{2kQx}{R^2}(\frac{1}{x}-\frac{1}{\sqrt{x^2 + R^2}})
\end{array}$$


[^1]: Taken from https://tikz.net/electric_field_plots/ by Izaak Neutelings (Februari, 2020)

[^2]: Taken from https://tikz.net/electric_dipole/ by Izaak Neutelings (July 2018)

---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---
