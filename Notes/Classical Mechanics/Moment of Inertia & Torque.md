
>[!summary]
Torque is the twisting force that allows a object to rotate.
>
Moment of inertia describes the quantitative measurement in angular rotation.
>
Key equations:
>
Torque:
$\tau = r \times F$
$\tau = I\alpha$
$\tau = \frac{dL}{dt}$
>
Moment of inertia:
$I = mL^2$
(summation if multiple objects)

>[!info]+ Read Time
**⏱ 4 mins**
# Moment of Inertia 
Moment of inertia describes the amount of rotation in angular motion. Like how much  resistance mass has in changes in angular motion. 

To find moment of inertia in a 1 body situation are described as:
$$I = ml^2$$
![[tor_2.png]]
[^1]
>[!note] Explanation
Example of MOI in a 1-body situation

In multiple bodies it is the summation of each body in referenced to the axis of rotation.
$$I = \sum m_i r_i^2$$
![[tor_3.png]]
[^1]
>[!note] Explanation
Example of MOI in a multiple body situation.

# Torque
Torque is the twisting force that enables a object to rotate. This is what allows [[Rotational Kinematics]] to happen. 

![[tor_1.png]]
[^1]
>[!note] Explanation
Example of torque on a free-body

Torque mathematically is described by the cross project between distance from axis of rotation. $$\tau = \vec{r} \times \vec{F}$$Its the cross product from axis of rotation because it's describing the amount of twist force you are giving the object and the direction of the force.

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
Using knowledge from Moment of inertia and [[Dynamic Forces & Newtons Laws]] we can derive an expression for torque that would describe the forces for rotating bodies. 
![[tor_4.png|500]]
>[!note] Explanation
Example of a particle moving in a circle. Note it has tangential component 

To derive a tangential component of torque we need to assume one thing:
>[!warning] Assumptions 
$sin(90) = 1$ 
>so
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



>[!example] Moment of inertia Example
>In multiple body example if we don't know the point of rotation or the CM we assume a point of rotation.
>
![[mom_1.png]]
>
If we assume we dont know where the point of rotation is and are solving for the CM, well assume the 2m mass to be the zero point. So we get the CM as:
>$$x_{cm} = \frac{\sum m_i x_i}{\sum m_i} = \frac{2m(0) + mL}{2m+m} = \frac{1}{3}L$$
>
Now we can find the inertia CM.
>$$I = \sum m_i r_i ^2 = (2m)(\frac{1}{3}L)^2 + m(\frac{2}{3}L)^2 = \frac{2}{3}mL^2$$

>[!example] Massive Pulley
In a pulley system where we assume the pulley mass and mass on a string. The pulley is rotating and the mass is falling. **The rate of acceleration at which they rotate / fall are the same.** 
>
**We are going to solve for acceleration**
>
![[mom_2.png]]
![[mom_3.png]]
>
>
>- For the block falling down we assume [[Dynamic Forces & Newtons Laws]] 
>- For the rotating block we assume Torque 
>- We assume the rate of acceleration are the same  
>
>$$\begin{array}{c}
1 ) T = mg -ma \\ 
2) \tau = RT \\ \\
\tau = R(mg-ma) \\ 
\tau = mgR -mR^2\alpha \\ 
I\alpha +mR^2\alpha = mgR \\ 
\alpha(I+mR^2) = mgR \\
\alpha = \frac{mgR}{I+mR^2}
\end{array}$$

[^1]: Taken from R. Epp Lecture notes.

---

🧪 Think this could help someone else?  
[Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidan-MathMatter) to help more learners discover it.

---
