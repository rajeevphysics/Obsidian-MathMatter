
>[!summary]
Newton Laws:
First law - an object will continue in its motion unless a force acts on it
Second law - $F = ma$ and $\frac{dp}{dt} = F$
Third law - Two objects will exert the same amount of force on each other if they interact
>
No force on an object will follow newtons first law
>
Contact forces are object that follow newtons third law like an object on a table
>
Static force is friction that will balance with the object to make sure the object doesn't move
>
Kinetic force is friction that still balances with an object but the object is moving
>
**Key equations:**
>
Static frictions:
$f_s \leq \mu_s N$
$tan(\theta) \leq \mu_s$
>
Kinetic friction:
$f_k = \mu_k N$
$\mu_k < \mu _s$
>
Applied force:
$F_a \geq \frac{tan(\theta) - \mu_s}{1+\mu _stan(\theta)} mg$

# Newtons Laws
>[!info] Inertial frame and Non-Inertial Frame
**Inertial frames:**
>- Newton first law is true 
>- Not accelerating  
>- No fake forces
>
**Non-Inertial Frame:**
>- Accelerating  
>- First law doesn't hold

**First law** - objects will continue in their motion unless a force acts on it
This is because in inertial frames if an object moving at some velocity will stay at the velocity if no force acts on it

**Second law** - The amount of force on a object is $F = ma$
Experimentally true and aligns always

**Derive Second law through [[Linear Momentum]]** 
$$\begin{array}{c}
p = mv \\ 
\frac{dp}{dt} = m \frac{dv}{dt} \\ 
\frac{dp}{dt} = ma \\ 
\frac{dp}{dt} = F 
\end{array}$$
 
**Third law** - If two objects interact they will exert the same amount of force on each other
Forces always come in pairs ($F_{12} = -F_{21}$)
# Types of Forces

## No force
If no force is acting on a object. If the object is moving at some velocity it will continue in at the velocity. This is because of newtons first law.

![[dy_1.png]]
[^1]
>[!note] Explanation
Example of no force interaction

## Contact Forces
Contact forces are forces that cause newtons third law. Forces always come in pairs and can be directed by Free Body Diagrams.

![[dy_3.png]]
[^1]
>[!note] Explanation
Example of contact force with a mass on a table due to gravity. 

With contact force the type of forces created by newton third law will always come into pairs like in this example:
![[dy_2.png]]
>[!note] Explanation
Free body digram of the example

## Static Force
Static force is the friction created by a object to keep in place. Friction is created by newtons second law and third law. For there to be static friction the object must not move and the forces must be balanced.
![[dy_4.png]]
[^2]
>[!note] Explanation
Example of static friction with a box on slide and free-body digram example.

>[!Important]  
In static examples for static friction to be true they must follow this inequality. Which states that the friction created MUST be less to eq to the max static friction $$\begin{array}{c}
f_s \leq f_{max} \\ 
f_s \leq \mu_s N
\end{array}$$

In this example we can find this out to determine the static friction
$$\begin{array}{c}
x: \\ 
Nsin(\theta) - f_s cos(\theta) = 0 \\ \\

y: \\ 
f_s sin(\theta) + Ncos(\theta) -mg = 0 \\ \\

N = mgcos(\theta)\\
f_s = mgsin(\theta) \\ 

\text{So from the inequality} \\ 

f_s \leq f_{max} \\ 
f_s \leq \mu_s N \\ 
mgsin(\theta) \leq \mu_s mgcos(\theta) \\ 
tan(\theta) \leq \mu_s

\end{array}$$

## Kinetic Friction
Kinetic friction is friction created while an object is moving. In kinetic friction the amount of friction is equal too:
$$f_k = \mu_k N$$
Also note that kinetic friction is less than static friction beacuse the amount of friciton while an object is moving is less than the static amount.
$$\mu_k < \mu _s$$

>[!warning] Static Vs. Kinetic 
Kinetic friction is friction while am object is in motion
Static friction is friction while am object is static

![[dy_5.png]]
[^1]
>[!note] Explanation
Example of kinetic friction and FBD

## Applied Force
Applied force is when you apply a force to hold objects in place. Normally this is applied in static friction forces. 

If the applied force is used in static friction forces, then laws in static friction will hold have to hold true
![[dy_6.png]]
[^1]
>[!note] Explanation
Example of applied force in static friction example

$$\begin{array}{c}
i :-mgsin(\theta) + F_a cos(\theta) + f_s = 0 \\ 
j: -mgcos(\theta) - F_asin(\theta) + N = 0 \\ 
\\ 
f_s \leq f_{max} \\ 
f_s \leq \mu_n N \\ 
mgsin(\theta) - F_acos(\theta) \leq \mu_s (mgcos(\theta) +F_asin(\theta)) \\ 
mg(\sin(\theta) - \mu_s cos(\theta)) \leq F_a(cos(\theta) + \mu _s sin(\theta)) \\ 

F_a \geq \frac{tan(\theta) - \mu_s}{1+\mu _stan(\theta)} mg
\end{array}$$

[^1]: Taken from R. Epp Lecture notes.

[^2]: Taken from https://tikz.net/dynamics_friction/ by Izaak Neutelings (September 2020)

---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---
