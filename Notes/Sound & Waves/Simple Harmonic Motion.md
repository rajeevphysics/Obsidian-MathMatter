
>[!summary]
SHM is the ideal type of motion 
>
The type of wave this would create is this:
$x(t) = Acos(\omega t + \phi)$
>
For a simple pendulum:
$\omega = \sqrt{\frac{g}{L}}$
>
For a real pendulum:
$\omega = \sqrt{\frac{mgd}{I}}$

# Deriving SHM equation
Simple harmonic motion is the motion an ideal spring makes on a frictionless floor. We assume this spring attached to some mass always reflects and follows hooks law as described by the figure below.

![[SHM_1.png|400]]
[^1]
>[!note] Explanation
>First image:
>SHM for a spring at rest. Notice its a equilibrium L distance from the wall
>
Second image:
SHM as the motion reaches its max stretch and starts to reflect
>
Third image:
SHM as the motion reaches it max compression and starts to reflect

We often imagine this effect on a unit circle where the position can be defined at point P. 

![[SHM_2.png]]
[^2]
Note than our angle will be defined as $\theta = \omega t + \phi$  

If we want to define the position (P) at any point in time notice how at t = 0 our position in time is defined (x) so we get a cos graph.
$$\begin{array}{c} 
x(t) = Acos(\theta) \\ 
x(t) = Acos(\omega t + \phi) 
\end{array}$$

## Energy Of A SHM
Our kinetic energy and potential energy can be rewritten from the equation above derived earlier.

$$\begin{array}{c} 
K = \frac{1}{2}m v^2 \quad \text{Can be rewritten as} \\
K = \frac{1}{2}m \ddot{x} \\ 
x(t) = Acos(wt+\phi) \\ 
\dot{x} = -Asin(\omega t + \phi) \\ 
\\ 
K = \frac{1}{2}m(Asin(\omega t + \phi))^2 \\ 
K  = \frac{1}{2}mAsin^2(\omega t + \phi) 
\end{array}$$
The same can be done for potential energy but wont be derived in this note


# Simple Pendulum
A simple pendulum is a block with a **mass** on a **massless** string.
For a simple pendulum to be true we only imagine it over small amplitudes only considering the x direction.
![[SHM_3.png]]
[^3]
>[!note] Explanation
A mass swinging over a length on a massless string. Assume small angle approx.

Consider the expression where we only consider the x direction.
$$\begin{array}{c} 
F = ma \\ 
-mgsin(\theta) = ma \\ 
\text{Imagine sin ove small angles as just $\theta$} \\ 
-mgsin(\theta) = m\ddot{x} \\ 
-mg\theta = \frac{\mathrm{d^2 s} }{\mathrm{d}t ^2} \\ 
\text{Remember that because this creats an arc $s = L\theta$} \\ 
mL\frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} = -mg\theta \\ 
\frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} = - \frac{g}{L}\theta
\end{array}$$

So for any value $\omega$:
$$\omega = \sqrt{\frac{g}{L}}$$
# Physical Pendulum 
A physical pendulum is any real pendulum where it has an extended body, like a string and mass with some mass.
![[SHM_4.png]]
[^3]
Again deriving this expression well assume for small values of angles and only consider the x-direction of motion.
$$\begin{array}{c} 
\tau = I\alpha \\ 
-mgdsin(\theta)  = I \frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} \\ 
\text{Well assume for small values of angle} \\ 
-mgd\theta  = I \frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} \\ 
\frac{-mgd}{I}\theta = \frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} 
\end{array}$$
so 
$$\omega = \sqrt{\frac{mgd}{I}}$$

[^1]: Taken from https://tikz.net/dynamics_spring/ by Izaak Neutelings (September 2020)

[^2]: Taken from https://tikz.net/dynamics_oscillator/ by Izaak Neutelings (October 2020)

[^3]: Taken from https://tikz.net/dynamics_pendulum/ by Izaak Neutelings (October 2020)

---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---
