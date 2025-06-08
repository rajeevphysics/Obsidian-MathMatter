
>[!summary]
A speical case of [[Biot-Savart Law]] for symmertric wires
Used for finding magnetic field and uses loops 
>
**Key equations:**
>
General equation:
$\oint \vec{B}\cdot d\vec{s} =\mu _0 i_{enc}$
>
Solenoids magnetic field:
$B = \frac{\mu_0 I_{enc}}{L}$

# What is Ampere Law
Ampere law is the special case of [[Biot-Savart Law]] for symmetric wires. Its always true, but is not always effective in using. 

It's best for finding the Magnetic flux.
>[!warning] Important
Although Ampere law is similar to Gauss's in that you have symmetric arguments, you are integrating over displacement not area.

We can't use gauss law for magnetic fields because $\oint B \cdot dA = 0$ so dont really get any useful information here.
## Deriving Ampere Law 
>[!warning] Assumptions 
In deriving ampere law well choose a long straight wire carrying a current (I).
>
We will assume the following:
Our Amperian loop is a distance r away
Amperian loop total distance is $2\pi r$
The magnetic field is constant and is always tangent to the circle
From [[Biot-Savart Law]] $B = \frac{\mu_0i  }{2\pi r}$ 

![[amp_1.png|500]]
[^1]
>[!note] Explanation
Long straight wire carrying a current. 
Amperian loop denoted by the dl, B and r 

We will use a symmetry argument to find the magnetic field a distance r away.

$$\begin{array}{c}
\oint B\cdot dl  \quad \text{Amperian Loop} \\ 
\oint B\cdot dl = B\oint dl \\ 
\oint B\cdot dl = B(2\pi r) \\ 
\text{From bior savart law $B = \frac{\mu_0i  }{2\pi r}$} \\ 
\\
\oint B\cdot dl = (\frac{\mu_0i  }{2\pi r}) (2\pi r)  \\
\oint B\cdot dl = \mu_0i 
\end{array}$$

>[!example] 
If you have something like that where there is a $I$ in the middle of the yellow cylinder and another for $b < r < c$ in the opposite direction ($-I$) 
>
![[amp_2.png]]
Explanation:
A cylinder carrying current enclosed in another cylinder with a current opposite to the smaller enclosed cylinder. There is a space in-between the two.
>
 The B in a < r < b:
 >$$\begin{array}{c} 
 \oint \vec{B}\cdot d\vec{s} = \mu_0 i_{enc} \\
 \vec{B} \oint d\vec{s} = \mu_0 i_{enc} \\
 \vec{B}\Delta s =  \mu_0 i_{enc} \\
 \vec{B} = \frac{\mu_0 i_{enc}}{2\pi R}
 \end{array}$$

# Solenoids Arguments
Solenoids are an arrangement of a long wire wrapped around loops like a cylinder.
When solenoids are passed with a current often solenoids create a strong magnetic field due to the long wire wrapped around many times.

![[amp_3.png]]
[^2]
>[!note] Explanation
Example of solenoid 

>[!warning] Assumptions
If we wanted to find the magnetic field of a solenoid we will need to assume some things:
M
>- Ampere law is true 
>- Amperian loop is a rectangle and is inf long

![[amp_4.png]]
[^2]
>[!note] Explanation
A solenoid with a amperian loop (green box) note that the amperian loop is inf long (2 and 4 are inf long away)


$$\begin{array}{c}
\oint_0 ^ 1 B\cdot ds = \mu_0 I_{enc} \\
\text{we can use the arugment that the magnetic field}\\
\text{is constant and the length is L so:}\\
BL = \mu_0 I_{enc} \\
B = \frac{\mu_0 I_{enc}}{L} \\ 
\oint_1 ^ 2 B\cdot ds = 0 \quad \text{Because ds perp to B} \\
\oint_2 ^ 3 B\cdot ds = 0 \quad \text{We assume that at long distance B = 0} \\
\oint_3 ^ 4 B\cdot ds = 0 \quad \text{Because ds perp to B}\\\\
\text{So then we can conclude:} \\
B = \frac{\mu_0 I_{enc}}{L}


\end{array}
$$


[^1]: Taken from https://tikz.net/magnetic_field_wire/ by Izaak Neutelings (March 2020)

[^2]: Taken from https://tikz.net/magnetic_field_solenoid/ by Izaak Neutelings (March 2020)
