
>[!summary]
The liquid drop model explain how atoms hold protons and neutrons together and can estimate the energy of a atom using a appromite taylor series. The equation is:
>
  The fermi gas model is another way to explain the liquid drop model but uses quantum mech expintation. It uses the explintation of that particle inside the atom will interact with its closest neighbouring particle (strong-neclear force). They are bounded together because atom act as fermion particles which allow to exist together as a bosonic particle.
 > 
>Key equation:
>$$E_B = \underbrace{C_1 A}_{Volume} - \underbrace{C_2A^{\frac{2}{3}}}_{Surface \space Area} - \underbrace{C_3 Z(Z-1)A^\frac{-1}{3}}_{\text{Coulomb Repulsion }} 
-\underbrace{C_4 \frac{(N-Z)^2}{A}}_{Imbalnce \space term}
  \pm \underbrace{C_5A^{-4/5}}_{Pair \space term}$$ 
  


# Liquid Drop Model
Image a atom like a droplet of water where its held together by the nuclear force. This model imagine the atom like a droplet of water held together by a binding energy. 
![[liq_1.png]]
[^1]

To find a the binding energy we make an approximation using by approximating the amount of electrons in a volume

If we assume $A \propto R^3$ then the surface area being $\propto R^2$  will have $A^{\frac{2}{3}} \propto R^2$  

We also need to take into account the Coulomb Repulsion inside the atom as an approximation 
$$\begin{array}{c} 
Repulsion = \frac{kQq}{R} \quad \text{For any unique pair} \\ 
\text{Inside an atom there are many pairs} \\
\sum {\frac{kQq}{R}} = \frac{Z(Z-1)}{2} \frac{Ke^2}{R} \\ 
\text{Where Z is the number of protons} \\
\text{and this count the number repulsion inside the atom} 
\\ \\
\text{Simplifying we assume $Ke^2$ as a constant and 1/R = $A^\frac{-1}{3}$} 
\end{array}$$
Another addition is difficult to derive (Wont derive that here)
but its to obey the Pauli exclusion principle to forbid any two particles to have the same wave function.

$$Imbalance = C_4 \frac{(N-Z)^2}{A} $$
The N-Z sqaured is to always make this this function is positive and the value is less important the bigger area (Radius) present 

The last term is about Pauli exclusion principle about how only two neutrons and protons can exist on the same energy level.
$$Pairs = \pm C_5 A^{-4/5}$$
Where its $C_5A^{-4/5}$ if there are an **even amount of neutrons and protons**. This is the **lowest energy requirement** since an even amount of both allows them to exist the lowest amount of energy levels. ([[Fermion, Bosons & Pauli Exclusion Principle]])

Where its -$C_5A^-4/5$ if there an **odd amount of neutrons and protons.** This is **highest energy requirement** since the odd amount forces one neutrons and one proton to exist alone in a highest energy level.

Where its 0 if there a mix of add amount and **even amount of nutrons and protons**. Since either nutrons or protons will be in its **lowest energy amount** and another will be in its **highest they cancel giving zero**.

**Note that we a $A^{-4/5}$ purely from experimental results**
## Full equation For The Liquid Drop Model
$$E_B = \underbrace{C_1 A}_{Volume} - \underbrace{C_2A^{\frac{2}{3}}}_{Surface \space Area} - \underbrace{C_3 Z(Z-1)A^\frac{-1}{3}}_{\text{Coulomb Repulsion }} 
-\underbrace{C_4 \frac{(N-Z)^2}{A}}_{Imbalnce \space term}


  \pm \underbrace{C_5A^{-4/5}}_{Pair \space term}$$
# Fermi Gas Model
The fermi gas model is a quantum model that represents neutrons interactions with the strong nuclear force and coulombs repulsion as well as protons with the strong nuclear force. 

Protons and neutrons both obey Pauli Exclusion Principle separately 
([[Fermion, Bosons & Pauli Exclusion Principle]])

>[!bug] Assumputions
This model assumes that each particles will interact with its neasest neighbour so we can approx the interaction thorugh a sqaure well model. 

Below is a figure which is a example of the fermi gas model, notice how protons and neutrons have their own energy levels, with two distinct spins.

If two protons on different energy levels with the same spin collide inside the nucleus they simply exchange energy levels.

![[liq_2.png]]
[^1]
>[!note] Explanation
Example of fermi-gas model. Left if the model for neutrons and the right is for protons.
## Assumed Models for Femi Gas model
There are different types of Fermi Models that we can assume.

If there are an **even amount of electrons and protons**, we are going to assume there is an even **amount of energy levels for both electrons and protons** (Like the fig above).

If there an un-even amount of electrons and protons. (Eg. Z  = 3, N = 5) than the more amount of either electrons or protons will have a higher energy level then the less amount of electrons or protons. 
**We will assume there will never be a situations where Z = 4 and N = 5 (For decay purposes)**
## Nuclear Stability
Due to the fermi gas model this can explain why different [[Types of Decay]] occur, such as beta and alpha decay.

The graph below is the stability of different types of decays
![[liq_3.png]]
[^1]
### Path of Alpha Decay
>[!bug] Note assumption 
This part assumes you already know Alpha decay read more about that in [[Types of Decay]]

When there is an even amount of protons and neutrons the fermi gas model tells us that there is an even amount of energy levels for both. 

Each level is filled. If there is many protons and neutrons there will be high coulombs repulsion by [[Coulombs Law]] between each particle, so it wants to reduce the energy levels.

It will release an whole energy levels of protons and neutrons (2N + 2Z)  Or reduce a whole energy level of protons and ****.

**For this decay to occur** $M_{parent} > M_{daughter} + M_{ejected}$ 

For example an radium atom
![[liq_4.png]]
[^1]

A normal radium atom noted in the figure below has some amount of energy. But classically for the particle to decay in Radom (Rn) it has to pass through a potential well (Classically forbidden) 

The radium experiences [[Quantum Tunnelling]] to allow this decay to occur.

![[liq_5.png]]
[^1]
>[!note] Explanation
Example of the tunneling occuring.
>
Parent atom needs a high amount of energy to allow the daughter atom to exist, but its Classically forbidden.

If we wanted to find the kinetic energy (Read more here:[[Nuclear Energy & Binding Energy#Nuclear Binding Energy]])

>[!warning] Finding Kinetic Energy
If we wanted to find the kinetic energy we need to assume the following:
>
>- Assume that nuclear binding energy is true ([[Nuclear Energy & Binding Energy]])
>- $\Delta E = \Delta mc^2 u$
>- We know the mass of the atoms (Parent, daughter, ejected)

So if we assumed those things are true and known, then finding the kinetic energy comes from that equation as the following:

$$KE = (M_{parent} - (M_{daughter} + M_{ejected}))c^2 u$$

**Note that momentum is classically conserved in this decay allowing you to find other classical identies in this result**
![[liq_6.png]]
[^1]
>[!note] Explanation
Example of the classical [[Linear Momentum]] in alpha decay  

### Path of Beta Plus Decay
>[!bug] Note Assumption 
This note assumes you already know beta decay from [[Types of Decay]]

For beta Plus beta decay to occur there is more protons than there are neutrons.

The fermi gas model tells us that there is a extra energy level for the uneven (more) protons. The atom want to have an even amount of energy levels so it will convert the proton into a neutron.

>[!warning] Assumption
Assume the following is true:
>- $M_{parent} > M_{daughter} + M_{ejected}$ 
>- [[Properties of Quarks]] are able to convert 

From quark conservations ([[Properties of Quarks]]) when a proton converts into a netrons, the proton has the quarks $$uud = p$$
The proton will convert into a nutron so it will have the quarks of 
$$udd = n$$

To convert from a proton to nutron notice that it has to lose a up quark for a down quark. From [[Properties of Quarks]] we know this as:
$$u = d + W^+ \quad \text{Where $W^+ = 1e$} $$
So when this conversion occurs the boson ($W^+$) will decay into a electron 
($e$) and neutrino ($v_e$).

$$W^+ = e + v_e$$

![[liq_7.png]]
[^1]
>[!note] Explanation
Example of this decay process

Now we have:
$$\begin{array}{c}
Z = Z -1 \\ 
N = N +1 
\end{array}$$
Both the electron and neutrino will have kinetic energy and mass where the **mass difference is shared between the two**.

So changing a proton into a neutron does the following in a beta plus decay.
$$p \to n + e^+ +v_e + KE$$
Note that $e^+ +v_e + KE$  are ejected from the atom
### Path of a Beta Minus Decay
>[!bug] Note assumption
This part of the note assumes that you know beta minus decay, read more information in [[Types of Decay]]

For a beta minus decay to occur there must be a more neutron than there are protons. 

The fermi gas model tells us that the neutron will have a higher energy level to the protons. The atom wants a even amount of energy levels, so the neutron will convert into a proton. This is done through conversion of quarks.

>[!warning] Assumption
We will assume the following is true:
$M_{parent} > M_{daughter} + M_{ejected}$ 
>Quarks conservation is true form [[Properties of Quarks]]

**At the start the neutron has the quarks:**
$$n = udd$$
and it want to convert into a proton with the quarks:
$$p = uud$$

To do this by [[Properties of Quarks]] a down quark will need to convert into a up quark.
$$d = u + W^- \quad \text{Where $W^-$ is -1e}$$
due to this conversion the $W^-$ will decay into:
$$W^- = e^- + \bar{v_e} + KE$$
Which will also have some kinetic energy.

![[liq_8.png]]
[^1]
>[!note] Explanation
Example of beta minus deacay

**From this conversion we will have:**
$$\begin{array}{c} 
Z  = Z +1 \\ 
N = N -1
\end{array}$$
and that neutron will converting into a proton causes this:
$$n = p + e^- + \bar{v_e} + KE$$
Where the $e^- + \bar{v_e} + KE$ are ejected from the atom


### Path of Gamma Decay
>[!bug] Note Assumption
This part of the note assume you know gamma decay, read more information about this in [[Types of Decay]]

When a atom experiences alpha or beta decay it loses something to drop energy level. 

But to (actually) drop energy levels, it needs to release that energy. (They are in a excited state)

To release that energy and keep its mass, releases a gamma ray (photon) with some kinetic energy. (Photons have no mass)

![[liq_9.png]]
[^1]
>[!note] Explanation
Example of gamma decay

[^1]: Taken from R. Epp Lecture notes.


---

> ✍️ This project’s been a labour of love.  
> If it helped, [give Thinkbook a star](https://github.com/rajeevphysics/Thinkbook) and let me know what you'd like to see next.

---