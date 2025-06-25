
>[!summary]
>
When electron form in a periodic lattice they behave as waves. They can form construvitly or destructively.
>
Even wave function from constructively and add up to form bonding 
Odd wave function from destructively and breaks forms of bonding.
>
**Ignoring U(x):**
$E_n = \frac{N^2h^2}{32L^2m}$
>
**With U(x):**
Get forms of wave functions:
$P_{even}(x)  = cos^2(\frac{\pi x}{a})$
$P_{odd} (x) = sin^2(\frac{\pi x}{a})$
>
Difference between the two wave functions form a energy gap

# Bonding Orbitals
![[free_1.png]]
[^1]
**Even wave-functions**
When the wave function ($P(x) = |\psi(x)|^2$) is even the wave function is constructive and add up to form bonding such as [[Covalent Bond]] and Ionic bonding. 

>[!note]
**When the wave function is high** it means that there is a **high chance of finding the particle in some form of bonding**.

Because the wave function add up in even wave functions they act like **glue to the atom**. The electron pulls the nuclei together.

**Odd wave-functions**
When the wave function is odd the wave function destructively interferes. This breaks forms of bonding. 

>[!note]
**When the wave function is high** it means that is a high **chance of finding the particle away from the atom** (nothing pulls the nuclei together) and there is no bonding because of this

# Ignoring U(x)
If now ignore the U(x) dips and peaks in the first fig above. So now imagine the U(x) is just straight 
![[free_2.png]]
[^1]
>[!note] Explanation
Instead of u(x) dipping and peaking we assume its constant

>[!warning] Assumptions
We will assume  there would be no change in E(t) or we assume its zero. So from [[Schrödinger Equation]] simplified would be the following assuming we are ignoring the U(x)
$$\psi(x) \propto e^{\frac{i}{\hbar} px }$$

Because $|\psi(x)|^2 = const$ this would form travelling waves like [[Quantization For Particle in a Box]] from [[Particle in a Box (1D)]]

if we do this all our energy is kinetic energy because $PE = \frac{p^2}{2m}$. 

So now the PE vs momentum would look something like this:
![[free_3.png]]
[^1]
>[!note]
If assume L is very large compared to h ,$\Delta p$ is very small
Because we get standing waves, we get allowed wavelengths ($\lambda$) and momentum ($p$)
## Finding The Fermi Energy
>[!warning] Assumption 
We assume that U(x) = 0 so that we get descrite momentum and wavelength levels similar to the [[Particle in a Box (1D)]] / [[Quantization For Particle in a Box]].

If we assume that energy will be quantized like the particle in the box, from [[Quantization For Particle in a Box]] we get the energy and momentum as this
$$\begin{array}{c} 
p_n = \frac{nh}{2L} \\ 
E_n = \frac{p_n ^2}{2m}
\end{array}$$
For each momentum level ($n_f$) you can have a **spin up** or **down** because of Pauli Exclusion Principle ([[Fermion, Bosons & Pauli Exclusion Principle#Pauli Exclusion Principle]])

so our number of electrons in each state is given by:
$$N = 2\times n_f \quad \text{(2$\times$ because the electron can be in a two states (spin up/down))}$$

$n_f = n$ because it's the nth decribe state that the particle could exist in so we can rewrite and solve for the energy:
$$\begin{array}{c} 
p_n = \frac{n_f h}{2L} \\ 
p_n = \frac{Nh}{4L} \\ 
\text{So we can use this to solve for the energy (Fermi Energy)} \\ \\
E_n = \frac{p_n^2}{2L}\\ 
E_n = \frac{N^2h^2}{32L^2m} \\ 

\text{Therefor the fermi energy (Energy for the nth momentum level) is this}
\end{array}$$

# Assuming U(X) is not zero
>[!warning] Assumptions 
When we consider the u(x) our $p = small$ (since p = h/L and L >> h) so by the [[Uncertainty Principle]] our uncertainty in $\lambda = large$ 

**Note** $\lambda = 2a$ (Its harder to see because we sqaured the wavefunction) 
1 a = the $\pi$ distance for cos(x)
![[free_4.png]]
[^1]

So our travalling wave will have both and left and right moving wave and left moving wave.

$$\begin{array}{c}
p = \frac{h}{2a}
\\ 
or 
\\
\frac{p}{\hbar} = \frac{\pi}{a}
\end{array}
$$
![[free_5.png]]
[^1]
The wave reflect because of [[Bragg Law (Reflection)]] caused by the wavelengths reflecting off a atom. 

So our wavefunction from [[Schrödinger Equation]] will have both and left and right moving wave.

$$\begin{array}{c} 
\psi_{even} (x ) \propto e^{\frac{i}{\hbar} px} +  e^{-\frac{i}{\hbar} px} \propto e^  {i\pi{\frac{x}{a}}} + e^  {-i\pi{\frac{x}{a}}} \propto cos(\frac{\pi x}{a}) \\


\psi_{odd} \propto e^{\frac{i}{\hbar} px} - e^{-\frac{i}{\hbar} px}
\propto e^  {i\pi{\frac{x}{a}}} - e^  {-i\pi{\frac{x}{a}}} \propto sin(\frac{\pi x}{a})
\\\\

Note:\\
P(x) = |\psi(x)|^2 \\
P_{even}(x)  = cos^2(\frac{\pi x}{a}) \\
P_{odd} (x) = sin^2(\frac{\pi x}{a})
\end{array}$$

## Energy gap
The energy only will occur when you **DONT** ignore the potential energy.
From our derivation we get two wavelengths of even and off which are both standing waves. 

On a graph this forms:
![[free_7.png]]
[^1]
**Notice how our EVEN peaks at 0,a,2a... and ODD peaks at $\frac{a}{2}, \frac{3a}{2}$...**
Near the atom the sin wave is peaks.  

Our total is energy is given by the following and note that both waves will have the same kinetic energy but different potential energy.
$$E_T = Kinetic + Potenetial$$

When were near the atom the P(odd) wave is more likely to be found there and hence has more potential energy. For the odd wave its least likely and has a smaller kinetic energy (likey very small since cos is nearly zero at the atom)


This differnce makes the energy gap
![[free_8.png]]
[^1]

[^1]: Taken from R. Epp Lecture notes.

---

🧪 Think this could help someone else?  
[Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidan-MathMatter) to help more learners discover it.

---
