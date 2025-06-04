
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
Simple harmonic motion is the motion an idea spring makes on a frictionless floor.
![[Pasted image 20250603010947.png]]
>[!note] Explanation
>SHM explained with a force being applied and in its relaxed state.

We often imagine this effect on a unit circle where the postion can be defined at point P. 
![[Pasted image 20250603011144.png]]
Note than our angle will be defined as $\theta = \omega t + \phi$  

If we want to define the position (P) at any point in time notice how at t = 0 our position in time is defined (x) so we get a cos graph.
$$\begin{array}{c} 
x(t) = Acos(\theta) \\ 
x(t) = Acos(\omega t + \phi) 
\end{array}$$

# Energy Of A SHM
Our kinetic energy and potentail enegy can be rewritten from the equation above derived eariler.

$$\begin{array}{c} 
K = \frac{1}{2}m v^2 \quad \text{Can be rewritten as} \\
K = \frac{1}{2}m \ddot{x} \\ 
x(t) = Acos(wt+\phi) \\ 
\dot{x} = -Asin(\omega t + \phi) \\ 
\\ 
K = \frac{1}{2}m(Asin(\omega t + \phi))^2 \\ 
K  = \frac{1}{2}mAsin^2(\omega t + \phi) 
\end{array}$$
The same can be done for potential energy


# Simple Pendulum
A simple pendulum is a block with a **mass** on a **massless** string.
For a simple pendulum to be true we only imagine it over small ampltuides only considering the x direction.

![[Pasted image 20250603011743.png]]
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
![[Pasted image 20250603013917.png]]
Again deriving this expression well assume for small values of angles and only consider the x-direciton of motion.
$$\begin{array}{c} 
\tau = I\alpha \\ 
-mgdsin(\theta)  = I \frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} \\ 
\text{Well assume for small values of angle} \\ 
-mgd\theta  = I \frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} \\ 
\frac{-mgd}{I}\theta = \frac{\mathrm{d^2 \theta} }{\mathrm{d}t ^2} 
\end{array}$$
so 
$$\omega = \sqrt{\frac{mgd}{I}}$$

