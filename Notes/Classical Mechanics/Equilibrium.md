
>[!summary]
A object is in equilibrium when is it no state of changing motion. Which is when linear and angular acceleration is 0.
>
For equilibrium to be true:
$\sum F = 0$
$\sum \tau = 0$ 

>[!info]+ Read Time
**⏱ 3 mins**
# General Principle
Equilibrium describes the state of no changing motion. This is when the velocity or rotational velocity is constant (where acceleration is 0) like in Torque examples involving [[Rotational Kinematics]] or [[Angular Momentum]] ([[Moment of Inertia & Torque]])

>[!warning] Solution Required for Equilibrium 
In order for there to be equilibrium there must be no change in acceleration. (Velocity can be const)

![[eq_1.png]]
[^1]
>[!note] Explanation
Example of equilibrium 

In a linear system in order to have no change in acceleration we demand from [[Dynamic Forces & Newtons Laws]] that:

$$\begin{array}{c} 
\sum F = \frac{dp}{dt} \\
\sum F = ma \\ 
ma \overset{!}{=} 0 \\ 
\sum F = 0
\end{array}$$
In a angular system in order to have change in acceleration we demand from [[Angular Momentum]] and [[Moment of Inertia & Torque]] that:

$$\begin{array}{c}
\tau = \frac{dL}{dt} \\ 
\frac{dL}{dt} = I\alpha \\ 
I\alpha \overset{!}{=} 0 \\ 
\tau = 0 
\end{array}$$
![[eq_2.png]]
>[!note] Explanation
In the first part there is only linear momentum and therefore the first law is statifed because there is no change in acceleration.
>
In the second part there is a change in angular acceleration so equilibrium is broken because there is a change in a acceleration. 


# Ladder Example 
![[eq_4.png]][^1]
![[eq_3.png]]
[^2]
>[!note] Explanation
First image:
Example of the minimum distance for there to be static equilibrium (Not moving), looking for $\mu_s$ and $\theta_{min}$ .
>
Second image:
Extended body digram for [[Moment of Inertia & Torque]] analysis 


>[!warning] Forces
First well separate the two cases with forces and torque on the extended body. Because were looking at minimum angle to allow static equilbirum (static friction) well be solving for $\mu_s \leq F_wN$ from [[Dynamic Forces & Newtons Laws]]     

$$\begin{array}{c}
\sum F_x = f_s - F_w \quad (1) \\
\sum F_y = N - mg -Mg \quad (2) \\ 
N = (m+M) g \quad \text{Assume static equilbrium for this to be true}
\end{array}$$

>[!warning] Torque
Second well assume a starting position from [[Moment of Inertia & Torque]] at the end point touching the frictionless ground

![[Pasted image 20250530215008.png]]
>[!note] Explanation
Drawn out torques for imporant parts of the diagram. Allowing to verify cross products correctly.

$$\begin{array}{c}
\tau_N = LF_w sin(\theta) - \frac{L}{2}Mgcos(\theta) - lmgcos(\theta) \\ 
\text{Solve for $F_w$}  \\ 
F_w = \frac{\frac{L}{2}Mgcos(\theta) + lmgcos(\theta)}{Lsin(\theta)} \\ 
F_w = \frac{1}{2}Mgcot(\theta) + \frac{l}{L}mgcot(\theta) \\ 
F_w = (\frac{1}{2}Mg + \frac{l}{L}mg)cot(\theta) \\ 
\end{array}$$
>[!warning] Solutions 
Now we have separated forces and torque we can solve for $\mu_s$ and then the angle using $f_s \leq \mu_s N$ 

$$\begin{array}{c}
\text{From 1} \\ 
f_s - F_w = 0 \\ 
F_w = f_s \\ 
\\

f_s \leq \mu N\\
\frac{F_w}{N} \leq \mu_s \\ 
\frac{(\frac{1}{2}Mg + \frac{l}{L}mg)cot(\theta) }{(m+g} \leq \mu_s \\ \\
\text{To simplify assume m = 2M and l = $\frac{3}{4 }L$} \\ 
\mu_s \geq \frac{\frac{1}{2}M + \frac{3}{4}\cdot 2M}{3M} cot(\theta) \\
\mu_s \geq \frac{2}{3}cot(\theta)
\end{array}$$

[^1]: Taken from R. Epp Lecture notes.

[^2]: Taken from https://tikz.net/dynamics_stability_ladder/ by Izaak Neutelings (October 2020)

---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---
