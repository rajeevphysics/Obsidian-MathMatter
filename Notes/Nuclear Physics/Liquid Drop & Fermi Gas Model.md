
>[!summary]
The liquid drop model explain how atoms hold protons and nutrons together and can estimate the energy of a atom using a appromite taylor series. The equation is:
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

To find a the binding energy we make an approximation using by approxating the amount of electrons in a volume

If we assume $A \propto R^3$ then the surface area being $\propto R^2$  will have $A^{\frac{2}{3}} \propto R^2$  

We also need to take into account the Columb Repulsion inside the atom as an approximation 
$$\begin{array}{c} 
Repulsion = \frac{kQq}{R} \quad \text{For any unique pair} \\ 
\text{Inside an atom there are many pairs} \\
\sum {\frac{kQq}{R}} = \frac{Z(Z-1)}{2} \frac{Ke^2}{R} \\ 
\text{Where Z is the number of protons} \\
\text{and this count the number repulsion inside the atom} 
\\ \\
\text{Simplifying we assume $Ke^2$ as a constant and 1/R = $A^\frac{-1}{3}$} 
\end{array}$$
Another addition is diffcult to derive (Dont have the math knowledge)
but its to obey the Pauli exclusion princilple to forbid any two particles to have the same wavefunction.

$$Imbalance = C_4 \frac{(N-Z)^2}{A} $$
The N-Z sqaured is to always make this this funciton is postive and the value is less important the bigger area (Radius) present 

The last term is about Pauli exclusion principle about how only two nurtrons and protons can exist on the same energy level.
$$Pairs = \pm C_5 A^{-4/5}$$
Where its $C_5A^{-4/5}$ if there are an even amount of nutrons and protons. This is lowest energy requiremnt since an even amount of both allows them to exist the lowest amount of energy levels. ([[Fermion, Bosons & Pauli Exclusion Principle]])

Where its -$C_5A^-4/5$ if there an odd amount of nutrons and protons. This is highest energy requiremnt since the odd amount forces one nutrons and one proton to excist alone in a highest energy level.

Where its 0 if there a mix of add amount and even amount of nutrons and protons. Since either nutrons or protons will be in its lowest energy amount and another will be in its highest they cancel giving zero.

**Note that we a $A^{-4/5}$ purely from experimental results
**
## Full equation For Liquid Drop
$$E_B = \underbrace{C_1 A}_{Volume} - \underbrace{C_2A^{\frac{2}{3}}}_{Surface \space Area} - \underbrace{C_3 Z(Z-1)A^\frac{-1}{3}}_{\text{Coulomb Repulsion }} 
-\underbrace{C_4 \frac{(N-Z)^2}{A}}_{Imbalnce \space term}


  \pm \underbrace{C_5A^{-4/5}}_{Pair \space term}$$



# Fermi Gas Model
The fermi gas model is a qunatum model that represents nurtrons interactions with the strong nucelar force and columbs repulsion as well as protons with the strong nuclear froce. 

Protons and nutrons both obey Pauli Exclusion Principle separately 
([[Fermion, Bosons & Pauli Exclusion Principle]])

This model assumes that each particles will interact with its neasest neighbour so we can approx the interaction thorugh a sqaure well model. 


This is an example of the fermi gas model, notice how protons and nurtrons have their own energy levels, with two distint spins.
If two protons on differnt energy levels with the same spin collide inside the nuclous they simply exchange energy levels.
![[liq_2.png]]
[^1]

# Assumed Models for Femi Gas model
There are differnt types of Fermi Models that we can assume.

If there are an even amount of electrons and protons, we are going to assume there is an even amount of energy levels for both electrons and protons (Like the fig above).

If there an un-even amount of electrons and protons. (Eg. Z  = 3, N = 5) than the more amount of either electrons or protons will have a higher energy level then the less amount of electrons or protons. **We will assume there will never be a siution where Z = 4 and N = 5 (For decay purposes)**


# Nuclear Stability
Due to the fermi gas model this can explain why differnt [[Types of Decay]] occur, such as beta and alpha decay.

The graph below is the stablabity of differnt types of decays
![[liq_3.png]]
[^1]
# Path of Alpha ($\alpha$) decay
When there is an even amount of protons and nutrons the fermi gas model tells us that there is an even amount of energy levels for both. 

Each level is filled. If there is many protons and nurtrons there will be high columb replusion between each particle, so it wants to reduce the energy levels.

It will release an whole energy levels of protons and nutrons (2N + 2Z) ([[Types of Decay#Alpha ($ alpha$) Decay]]) Or reduce a whole energy level of protons and nutrons.

**For this decay to occur** $M_{parent} > M_{daughter} + M_{ejected}$ 

For example an radium atom
![[liq_4.png]]
[^1]

A normal radium atom noted in the figure below has some amount of energy. But classicaly for the particle to decay in Radom (Rn) it has to pass through a potential well (Classicaly forbidden) 

The radium experiences [[Quantum Tunneling]] to allow this decay to occur.
![[liq_5.png]]
[^1]

If we wanted to find the kinetic energy ([[Nuclear Energy & Binding Energy#Nuclear Binding Energy]])

If we assume this formula is true for any type of nuclearing binding/ decay is true than:
$$\Delta E = \Delta mc^2 u $$
So if we assume we know the masses of the atoms than:
$$KE = (M_{parent} - (M_{daughter} + M_{ejected}))c^2 u$$
**Note that momentum is classicaly conserved in this decay**
![[liq_6.png]]
[^1]
So you can find the speed/energy of any particle in this decay.

# Path of Beta Plus Decay ($\beta^+$)
For beta Plus beta decay to occur there is more protons than there are electrons ([[Types of Decay#Beta Plus Decay ($ beta +$)]])

The fermi gas model tells us that there is a extra energy level for the uneven (more) protons. The atom want to have an even amount of enegy levels so it will convert the protons into a nutron.

Assume: $M_{parent} > M_{daughter} + M_{ejected}$ 

From quark converation when a proton converts into a nutron, the proton has the quarks $$uud = p$$
The proton will convert into a nutron so it will have the quarks of 
$$udd = n$$

To convert from a proton to nutron notice that it has to lose a up quark for a down quark. From [[Quarks]] we know this as:
$$u = d + W^+ \quad \text{Where $W^+ = 1e$} $$
So when this conversion occurs the boson ($W^+$) will decay into a electron 
($e$) and neutrino ($v_e$).

$$W^+ = e + v_e$$
![[liq_7.png]]
[^1]
Now we have:
$$\begin{array}{c}
Z = Z -1 \\ 
N = N +1 
\end{array}$$
Both the electron and nutrino will have kinetic eneegy and mass where the **mass differnce is shared between the two**.

So changing a proton into a nutron does the following in a beta plus decay.
$$p \to n + e^+ +v_e + KE$$
Note that $e^+ +v_e + KE$  are ejected from the atom
# Path of a Beta Minus Decay
For a beta minus decay to occur there must be a more nutrons than there are protons. [[Types of Decay#Beta Minus Decay ($ beta -$)]] 

The fermi gas model tells us that the nutrons will have a higher energy level to the protons. The atom wants a even amount of energy levels, so the nutron will convert into a proton. This is done through conversion of quarks.

Assume: $M_{parent} > M_{daughter} + M_{ejected}$ 

**At the start the nutron has the quarks:**
$$n = udd$$
and it want to convert into a proton with the quarks:
$$p = uud$$

To do this by [[Quarks]] a down quark will need to convert into a up quark.
$$d = u + W^- \quad \text{Where $W^-$ is -1e}$$
due to this conversion the $W^-$ will decay into:
$$W^- = e^- + \bar{v_e} + KE$$
Which will also have some kinetic energy.
![[liq_8.png]]
[^1]
**From this conversion we will have:**
$$\begin{array}{c} 
Z  = Z +1 \\ 
N = N -1
\end{array}$$
and that nutron will convertting into a proton causes this:
$$n = p + e^- + \bar{v_e} + KE$$
Where the $e^- + \bar{v_e} + KE$ are ejected from the atom


# Path of Gamma Decay
When a atom experinces alpha or beta decay it loses something to drop energy level. But to drop energy levels are a excited state now, it needs to release that energy. To release that energy it needs to keep its mass, so it releases a gamma ray (photon) with some kinetc energy.

![[liq_9.png]]
[^1]

[^1]: Taken from R. Epp Lecture notes refer to [[References & License]] for more information.
