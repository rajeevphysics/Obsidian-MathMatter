
>[!summary]
Argument used for highly symm argument. Always true and most useful for finding the magnetic flux.
>
General equation:
$\oint \vec{B}\cdot d\vec{s} =\mu _0 i_{enc}$

Similar argument to [[Gauss's Law]] needing highly symm augments to work effectivity. Always true. Good for finding the [[Magnetic Flux & Current]]

Most of the time you should make some closed argument to allow the magnetic field to be constant, so you only need to integrate over ds

>[!warning] Important 
>Unlike gauss law you are integrating over displacement not area.

General equation:
$$\oint \vec{B}\cdot d\vec{s} =\mu _0 i_{enc}$$


# Examples
If you have something like that where there is a $I$ in the middle of the yellow cylinder and another for $b < r < c$ in the opposite direction ($-I$) 

![[Pasted image 20250601204337.png]]
>[!note] Explanation
A cylinder carrying current enclosed in another cylinder with a current opposite to the smaller enclosed cylinder. There is a space in-betweenn the two.

 The B in a < r < b:
 $$\begin{array}{c} 
 \oint \vec{B}\cdot d\vec{s} = \mu_0 i_{enc} \\
 \vec{B} \oint d\vec{s} = \mu_0 i_{enc} \\
 \vec{B}\Delta s =  \mu_0 i_{enc} \\
 \vec{B} = \frac{\mu_0 i_{enc}}{2\pi R}
 \end{array}$$

# Symm Aurmgents
![[Pasted image 20250404141611.png]]
>[!note] Explanation
A solenoid in a block, we assume a inf long rectangle as our enclosed displacment.

in this example if we assume the rentangle (abcd) to be inf long)
Then we can find the total magnetic field assumeing that 

$$\begin{array}{c}
\oint_a ^ b B\cdot ds = \mu_0 I_{enc} \\
\text{we can use the arugment that the magnetic field}\\
\text{is constant and the length is L so:}\\
BL = \mu_0 I_{enc} \\
B = \frac{\mu_0 I_{enc}}{L} \\ 
\oint_b ^ c B\cdot ds = 0 \quad \text{Because ds perp to B} \\
\oint_c ^ d B\cdot ds = 0 \quad \text{We assume that at long distance B = 0} \\
\oint_d ^ a B\cdot ds = 0 \quad \text{Because ds perp to B}\\\\
\text{So then we can conclude:} \\
B = \frac{\mu_0 I_{enc}}{L}


\end{array}
$$


