
>[!summary]
When a body rotates like in [[Dynamic Forces & Newtons Laws]] it can have rotational kinetic energy and work displaced on it like a linear body moving.
>
Key equations:
$K = \frac{1}{2}I\omega ^2$
$W = \Delta K$

# Rotational Kinetic Energy
Rotational kinetic energy is the kinetic energy created by a rotating body. 
This is different from kinetic energy created by [[Dynamic Forces & Newtons Laws]]

If we assume a rotating body has kinematics energy in this way we derive an expression done blow.
![[rot_1.png]]
[^1]
>[!note] Explanation
Example of a rotating mass.

>[!warning] Assumption 
$v = r\omega$ from [[Rotational Kinematics]]

$$\begin{array}{c}
K = \frac{1}{2}mv^2 \\ 
v = r\omega \\ 
K = \frac{1}{2}m(r\omega)^2 \\ 
K = \frac{1}{2}mr^2 \omega ^2 \\
K = \frac{1}{2}I\omega ^2 
\end{array}$$
>[!example] Finding V Example
![[Pasted image 20250517155349.png]]
Starts at rest, block falls through a distance x and rotates some angle. We can find V.
Assume $\omega = \frac{v}{R}$ because of [[Rotational Kinematics]]
We are using energy from [[Work, Energy & Power]]
>
>$$\begin{array}{c}
\Delta E = \Delta K +\Delta U \\ 
\Delta K = \frac{1}{2}m(v^2 - 0)+\frac{1}{2}I(\omega^2 -0) \\ 
\Delta U = mg(-\Delta x ) \\ 
\Delta E = \frac{1}{2}mv^2 +\frac{1}{2} I\omega^2 - mg\Delta x \\ 
\omega = \frac{v}{R} \\
0 = \frac{1}{2}m(1+\frac{I}{mR^2})v^2 - g\Delta x \\ 
v = \sqrt{\frac{2g\Delta x}{1+\frac{I}{mR^2}}}
\end{array}$$

# Rotating Work
If a object rotates around a axis than the object then work must have been applied on that object in order for it to rotate.

We can derive an expression for rotating work done blow.

![[rot_2.png]]
[^1]
>[!note] Explanation
Example of work in a rotating body

>[!warning] Assumption
$F_\perp = \frac{\tau}{r}$
$ds = rd\theta$ 
> $d\theta = \omega dt$ 
>F above derived from [[Moment of Inertia & Torque]] because we assume perp sin(1) = 1
ds  and $d\theta$ above is derived from [[Rotational Kinematics]]

$$\begin{array}{c}
W = F_\perp ds \\ 
W = \tau d\theta \\ 
W  = \int \tau(\theta) d\theta \\ 
W = \int I \alpha d\theta \\ 
W = I\int_t ^ T \frac{d\omega}{dt} (\omega dt)  \\ 
W = I\int_t ^ T {d\omega} (\omega)  \\
W = \frac{1}{2}I(\omega _f^2-\omega_i ^2) \\ 
W = \Delta K
\end{array}$$


>[!example] Work V example 
Using the same example for a energy example, find V. Should get the same answer.
![[Pasted image 20250517160558.png]]
Assume $\omega = \frac{v}{R}$ because of [[Rotational Kinematics]]
We are using work from [[Work, Energy & Power]]
>
>
The only work done by the system is done by gravity.
$$W = mg\Delta x$$ So:
>$$\begin{array}{c}
W = \Delta K \\ 
\Delta K = \frac{1}{2}m(v^2-0) + \frac{1}{2}I (\omega ^2 - 0) \\ 
2mg\Delta x = mv^2 + I\omega ^2 \\ 
2mg\Delta x = mv^2 + I(\frac{v^2}{R^2}) \\ 
2mg\Delta x = mv^2(1+\frac{I}{mR^2}) \\ 
v = \sqrt{\frac{2g\Delta x}{1+\frac{I}{mR^2}}}
\end{array}$$

[^1]: Taken from R. Epp Lecture notes.

---

🧪 Think this could help someone else?  
[Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidan-MathMatter) to help more learners discover it.

---
