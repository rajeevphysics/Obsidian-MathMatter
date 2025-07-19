
# Definition
Torque is the twisting force that enables an object to rotate. Torque is always needed for an object to begin and stay in rotation. 

![[tor_1.png|300]]
[^1]
>[!note] Explanation
Example of torque on a free-body

Torque mathematically is described by the [[!Cross Product|cross product]] between the distance from the axis of rotation and the force applied.
$$
\tau = \vec{r} \times \vec{F}
$$ Its the cross product from axis of rotation because it's describing the amount of twist force you are giving the object and the direction of the force.

## Torque Defined Through Angular Momentum 
>[!bug] Pre-Knowledge
We assume that $L = r \times p$ from [[Angular Momentum]] 

If we assume our pre-knowldege from angular momentum, than when we take the derivate of our angular momentum we get the solution:

$$\begin{array}{c}
\frac{dL}{dt} = \frac{dr}{dt} \times p + r \times \frac{dp}{dt} \\ 
\frac{dL}{dt} = m(v\times v) + r \times F \\ 
\frac{dL}{dt} = r \times F \\ 
\frac{dL}{dt} = \tau
\end{array}$$
## Deriving Torque Expression
Using knowledge from Moment of inertia and [[Forces]] we can derive an expression for torque that would describe the forces for rotating bodies. 
![[tor_4.png|500]]
>[!note] Explanation
Example of a particle moving in a circle. Note it has tangential component 

To derive a tangential component of torque we need to assume one thing:
>[!warning] Assumptions 
$sin(90) = 1$ 
>So
$\tau = rFsin(90) = rF$
$a_t = r\alpha$ 
>Because $a_t$ is the tangential component of acceleration we need to assume a r distance

$$\begin{array}{c}
\tau = rF_\perp  \\ 
F_{\perp} = ma_t = mr\alpha \\ 
\tau = mr^2 \alpha \\
mr^2 = I \\ 
\tau = I\alpha
\end{array}$$

