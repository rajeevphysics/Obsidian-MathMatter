
>[!summary]
Energy is always a conserved quantity 
>
Potential energy is the amount of energy in a system
>
Energy transfer is the transfer of energy to different systems 
> 
>Power is the rate at which energy is transfered over time
>
**Key equations:**
>
If force is constant 
$W = F\Delta \cdot x$
>
If force is non-constant:
$W = \int_r ^{r_f} F(r) \cdot dx$
>
Work-energy theorem:
$W = \Delta K$
>
>$P = \frac{F(t) \cdot dr}{dt} = F(t) \cdot v(t)$
>
>$P_{avg} = \frac{W}{\Delta t}$
>

# Potential Energy
**Energy is always a conversed quantity**. It may not always be constant.
In a closed system there is no energy transferred out or in to allow it to be conserved.

Potential energy is the amount stored in a system. 
>[!info] Potential Energy
In general system always want to have the lowest amount of energy. Since its energy favourable.

In [[Electric Potential energy]] the most favourable position an electron can be in is when the the electron is near an opposite charge object.

In [[Gravitational Potential energy]] the most favourable position an object can be in is when a object is in a state of equilibrium. 


# Energy Transfer
is the transfer of energy on an object to other forms of energy.

## Constant Force
![[Pasted image 20250514235112.png]]
>[!note] Explanation
1D case of energy transfer over a distance

In a 1D case energy transfer is the amount of effort to transfer done on a object (work).
If we do work over a distance x than we donate the amount of energy transfer by (In  3D he force and distance are dot products)
$$W = F\Delta x$$
>[!warning] Assumption
If we assume F is constant over a distance 

If F is constant we can use [[Kinematics]] so that $ax = \frac{1}{2}(v^2 - v_0 ^2)$
so that:
$$\begin{array}{c}
W = F\Delta x \\ 
W = ma\Delta x \\ 
W = \frac{1}{2}m (v^2 - v_0 ^2) \\ 
W = \Delta K
\end{array}$$

# Non-Constant Force (Work-energy)
For when force is non-constant we cant assume that force is constant. So we need to integrate over the whole distance.

![[Pasted image 20250515000158.png]]
>[!note] Explanation
>Example of Non-constant force

$$\begin{array}{c}
W = \int_r ^{r_f} F(r) \cdot dx \\ 
F(r) = ma = m\frac{dv}{dt} = m \frac{dv}{dt} \cdot \frac{dt}{dx} = m v\frac{dv}{dx} \\ 
W = \int_r ^{r_f} mv \frac{dv}{dx} dx \\
W = mv \int_r ^{r_f} dv \\ 
W = \frac{1}{2} m(v_f ^2 - v^2)
\end{array}$$

Note that you get the same solution if the force is constant.

# Power
Power is the rate at which energy is transferred over time, with a force and distance being applied. 

We denote this by (if force is constant):
$$P = \frac{F(t) \cdot dr}{dt} = F(t) \cdot v(t)$$

![[Pasted image 20250515003218.png]]
>[!note] Explanation
If force is not constant in power example
If force is not constant like before we need to integrate:

$$\begin{array}{c}

P_{avg} = \frac{1}{\Delta t} \int_t ^ T P(t)dt \\ 
P_{avg} =  \frac{1}{\Delta t} \int_t ^ T  \frac{F(t) \cdot dr}{dt} dt \\ 
P_{avg} =  \frac{1}{\Delta t} \int_t ^ T F\cdot dr \\
P_{avg} = \frac{W}{\Delta t}
\end{array}$$
If we assumed force was constant we would find the same result