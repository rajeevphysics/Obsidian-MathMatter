
>[!summary]
Zero point energy is finding the lowest possible energy level of a system. 
General equation for zero-point energy:
$E_n = (n+1/2)hf$


>[!Bug] Reason for Zero point
From the classical harmonic oscillator ([[Quantum Harmonic Oscillator#Classical Harmonic Oscillator]])
$E = \frac{p^2}{2m}+\frac{1}{2}kx^2$ so for E = 0
>
So for the quantum harmonic oscillator the lowest energy cannot be zero thing that would mean that $\Delta x = 0$ and $\Delta p = 0$ which would violate the [[Uncertainty Principle]] meaning that the lowest possible energy level is never zero in a quantum sense

# Finding the lowest energy level
If we use the example in [[Quantum Harmonic Oscillator#Quantum System]] where
$E =  \frac{p^2}{2m}+\frac{1}{2}kx^2$ 

If we assume that distrubition of momentum and postion is this we can dervie the following:
$$\begin{array}{c}
\left< x \right> = 0 \\ 
\left< x^2 \right> = \Delta x^2 = A^2 \\\\
\left< p \right> = 0 \\
\left< p^2 \right> = \Delta p ^2 \geq \frac{\hbar^2}{4\Delta x ^2} = \Delta p ^2 \geq \frac{\hbar^2}{4\Delta A ^2}
\end{array}$$
![[Pasted image 20250408075635.png]] 

From this and our early defination of energy we can assume that the average energy will be:
$$\left < E\right> = \frac{\hbar ^2}{8mA^2} + \frac{1}{2}kA^2$$
From this we can draw the average energy with time. As well as the PE and KE indivual
![[Pasted image 20250408080411.png]]

From finding $A_0$ and using the average energy we can solve for the lowest energy level ($E_0$)
$$ \begin{array}{c}
E_0 
= \frac{\hbar^2 \cdot 2\sqrt{km}}{8m\cdot \hbar} + \frac{1}{2} k \frac{\hbar}{2\sqrt{km}} \\
\text{Simplifying the first term first} \\ 
= \frac{\hbar^2 \cdot 2\sqrt{km}}{8m\cdot \hbar} = \frac{1}{4}\hbar \sqrt{\frac{k}{m}} \\ 
\text{Second term} \\ 
= \frac{1}{2} k \frac{\hbar}{2\sqrt{km}} = \frac{1}{4}\hbar \sqrt{\frac{k}{m}} \\ \\
\text{So our final equation is then:} \\ 
= \frac{1}{4}\hbar \sqrt{\frac{k}{m}} + \frac{1}{4}\hbar \sqrt{\frac{k}{m}} \quad  \text{Let  $\sqrt{\frac{k}{m}} = f$} \\
= \frac{1}{2 } hf \\ \\ 
\text{A generalized equation we can assume that following:} \\ 
\text{Energy has be quantized (cant have half energy)} \\ 
E_n = (n+1/2)hf
\end{array}$$
 **Note** energy is quantized because of [[Quantization of Atomic Orbital's]] and due to [[Fermion, Bosons & Pauli Exclusion Principle#Pauli Exclusion Principle]] 