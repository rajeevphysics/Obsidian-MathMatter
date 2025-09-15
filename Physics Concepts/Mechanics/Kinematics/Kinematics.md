
> [!summary]
Kinematics is the study of motion in 1D and 2D. Used to describe the motion of an unknown function in terms of its derivatives
> 
**Key Equations**
> 
General Equations to Describe Motion in 1D:
$\Delta x = v_{avg} t$
$\Delta v = a_{avg} t$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition
Kinematics describes the motion of [[Displacement|displacement]], [[Velocity|velocity]], and [[Acceleration|acceleration]] in 1D or 2D. Kinematics is used to describe an unknown function (like displacement) in terms of one or more of its [[Derivative|derivatives]] (velocity/acceleration). This motion also assume the velocity or acceleration remains constant from point a to b or can be accurately described as an average as that function.
# Deriving General Expressions
>[!warning] Assumptions 
To derive a general expression to describe motion in 1D, assume the following:
> - The difference of [[Displacement|displacement]] from a to b is the area (integral) of [[Velocity|velocity]]
> - The difference in [[Velocity|velocity]] from a to b is the area (integral) of [[Acceleration|acceleration]]

In finding an equation to determine the change in displacement. From the graph below, it's the integral of velocity, where we assume that $v(t)$ can be described as the average velocity $v_{avg}$ from the two times is

$$
\begin{align*}
\Delta x &= \int_{t_{1}} ^{t_{2}} v(t) dt \\ 
&= v_{avg} [t_{2}-t_{1}]\\
 &= v_{avg} \Delta t
\end{align*}
$$

To describe the change in velocity between two times. This can be found as the area under the acceleration graph or the integral of acceleration between $t_{1}$ and $t_{2}$. Assuming that $a(t)$ between the two times is $a_{avg}$ the following can be concluded


$$
\begin{align*}

\Delta v &= \int_{t_{1}} ^{t_{2}} a(t)dt \\
 &= a_{avg} [t_{2}-t_{1}]\\
 &= a_{avg} \Delta t

\end{align*}
$$

> [!note]+ Diagram of velocity & acceleration being derivatives of displacement 
![[kin_1.png]]
[^1]
Shows three diagrams:
> - Displacement with a change in direction 
> - Velocity being a derivative of displacement 
> - Acceleration being a derivative of velocity as is constant 


---
<!-- Light Mode Newsletter Embed -->
<div class="mm-form-light">
  <iframe
    src="https://updates.cyberleadhub.com/widget/form/Y0kpQVpjJQuxEfX59m17"
    id="inline-Y0kpQVpjJQuxEfX59m17"
    title="Join Math & Matter Newsletter (Light)"
    data-height="900"
    scrolling="no"
    allowtransparency="true"
    loading="lazy"
    style="width:100%;height:350px;border:none;border-radius:10px;background:transparent;overflow:hidden"
  ></iframe>
</div>

<!-- Dark Mode Newsletter Embed -->
<div class="mm-form-dark">
  <iframe
    src="https://updates.cyberleadhub.com/widget/form/lbeDLm24VjuaFxhjccA1"
    id="inline-lbeDLm24VjuaFxhjccA1"
    title="Join Math & Matter Newsletter (Dark)"
    data-height="900"
    scrolling="no"
    allowtransparency="true"
    loading="lazy"
    style="width:100%;height:350px;border:none;border-radius:10px;background:transparent;overflow:hidden"
  ></iframe>
</div>

<!-- Provider script (only once) -->
<script src="https://updates.cyberleadhub.com/js/form_embed.js"></script>


[^1]: Taken from https://tikz.net/kinematics_curves_xva/ by Izaak Neutelings (June 2020)
