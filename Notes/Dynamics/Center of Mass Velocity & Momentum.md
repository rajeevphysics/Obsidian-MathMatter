
> [!summary]
The center of mass in terms of velocity is the velocity of the point where all the mass of a rigid body or collection of particles lies.
> 
**Key Equations:**
> 
Velocity center of mass:
$v_{cm}=\frac{\sum_{i} m_{i} \vec{v_{i}}}{\sum_{i}m_{i}}$
> 
Velocity center of mass in terms of momentum:
$v_{cm}=\frac{p_{tot}}{M}$

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
The center of mass in terms of velocity describes the velocity as if all the mass were concentrated at that point. If a rigid body or system of particles has a velocity, then it also has [[Linear Momentum|linear momentum]]. By definition of [[Velocity|velocity]] is the [[Instantaneous|instantaneous change]] of the [[Center of Mass Displacement|center of mass position]]. 

## Derivation 
> [!warning] Assumptions
To derive the center of mass velocity and momentum, assume the following:
> - [[Velocity|Velocity]] is the [[Derivatives|derivative]] of [[Displacement|displacement]] 
> - The [[Center of Mass Displacement|center of mass position]] is defined as $\vec{r_{cm}} = \frac{\displaystyle \sum_{i}m_{i}\vec{r_{i}}}{\displaystyle \sum_{i} m_{i}}$
> - [[Linear Momentum|Linear momentum]] is defined as $\vec{p} =m\vec{v}$

$$
\begin{align*}
v_{cm}&= \frac{dr_{cm}}{dt} \\
&=  \frac{\sum_{i} \overbrace{m_{i} \vec{v_{i}}}^{p_{i}}}{\sum_{i}m_{i}} \\
&= \frac{\sum_{i} p_{i}}{\sum_{i}m_{i}} \\
&= \frac{p_{tot}}{M}
\end{align*}
$$

> [!note]
In the final line of the derivation we let $\displaystyle\sum_{i}p_{i}=p_{tot}$ and $\displaystyle\sum_{i}m_{i}=M$
