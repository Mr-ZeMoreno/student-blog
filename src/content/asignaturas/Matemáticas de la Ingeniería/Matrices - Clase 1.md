---
title: 'Matrices - Clase 1'
description: 'Una colección de asignaturas'
pubDate: 'Marzo 30 2025'
construccion: true
isMath: true
---

# 1.- Sean $A = (a_{ij})$ y $B=(b_{ij})$ dos matrices de orden $3 \times 4$ tales que:

$$
a_{ij} = i^2 - ij \quad \text{y} \quad b_{ij} = i + 2j
$$

## a) Definir las matrices $A$ y $B$ .

Definición de $A$:

$$
\begin{aligned}
A &= \begin{pmatrix}
(1^{2} - 1*1) & (1^{2} - 1*2) & (1^{2} - 1*3) & (1^{2} - 1*4) \\
(2^{2} - 2*1) & (2^{2} - 2*2) & (2^{2} - 2*3) & (2^{2} - 2*4) \\
(3^{2} - 3*1) & (3^{2} - 3*2) & (3^{2} - 3*3) & (3^{2} - 3*4)
\end{pmatrix}  \\ \\
A &= \begin{pmatrix}
(1 - 1) & (1-2) & (1-3) & (1-4)  \\
(4- 2) & (4-4) & (4-6) & (4 - 8) \\
(9- 3) & (9-6) & (9-9) & (9-12)
\end{pmatrix} \\ \\
A&= \begin{pmatrix}
0 & -1 & -2 & -3 \\
2 & 0 & -2 & -4 \\
6 & 3 & 0 & -3
\end{pmatrix}
\end{aligned}
$$

Definición de $B$:

$$
\begin{aligned}
B &= \begin{pmatrix}
(1 + 2*1) & (1 + 2*2) & (1 + 2*3) & (1 + 2*4) \\
(2 + 2*1) & (2 + 2*2) & (2 + 2*3) & (2 + 2*4) \\
(3 + 2*1) & (3 + 2*2) & (3 + 2*3) & (3 + 2*4) \\
\end{pmatrix} \\ \\
B &= \begin{pmatrix}
(1 + 2) & (1+4) & (1+6) & (1+8) \\
(2 + 2) & (2+4) & (2+6) & (2+8) \\
(3 + 2) & (3+4) & (3+6) & (3+8)
\end{pmatrix} \\ \\
B&= \begin{pmatrix}
3 & 5 & 7 & 9 \\
4 & 6 & 8 & 10 \\
5 & 7 & 9 & 11
\end{pmatrix}
\end{aligned}
$$

Ambas definiciones:

$$
A = \begin{pmatrix}
0 & -1 & -2 & -3 \\
2 & 0 & -2 & -4 \\
6 & 3 & 0 & -3
\end{pmatrix} \quad\text{y}\quad B = \begin{pmatrix}
3 & 5 & 7 & 9 \\
4 & 6 & 8 & 10 \\
5 & 7 & 9 & 11
\end{pmatrix}
$$

## b) Calcular $A + B$ y $3A - 2B$ .

Calcular $A+B$ :

$$
\begin{aligned}
A + B &= \begin{pmatrix}
(0 + 3) & (-1+5) &(-2+7)&(-3+9) \\
(2+4)&(0+6)&(-2+8)&(-4+10) \\
(6+5)&(3+7)&(0+9)&(-3+11)
\end{pmatrix} \\ \\
A + B &= \begin{pmatrix}
3 & 4 &5&6 \\
6&6&6&6 \\
11&10&9&8
\end{pmatrix}
\end{aligned}
$$

Calcular $3A-2B$ :

- Calcular $3A$ :
  $$
  \begin{aligned}
  3A &= \begin{pmatrix}
  (3*0)&(3*-1)&(3*-2)&(3*-3)\\
  (3*2)&(3*0)&(3*-2)&(3*-4) \\
  (3*6)&(3*3)&(3*0)&(3*-3)
  \end{pmatrix} \\ \\
  3A&=\begin{pmatrix}
  0&-3&-6&-9 \\
  6&0&-6&-12 \\
  18&9&0&-9
  \end{pmatrix}
  \end{aligned}
  $$
- Calcular $2B$ :

  $$
  \begin{aligned}
  2B &= \begin{pmatrix}
  (2*3)&(2*5)&(2*7)&(2*9) \\
  (2*4)&(2*6)&(2*8)&(2*10) \\
  (2*5)&(2*7)&(2*9)&(2*11)
  \end{pmatrix} \\ \\
  2B &= \begin{pmatrix}
  6&10&14&18 \\
  8&12&16&20 \\
  10&14&18&22
  \end{pmatrix}
  \end{aligned}
  $$

- Calcula $3A-2B$ :
  $$
  \begin{aligned}
  3A-2B &= \begin{pmatrix}
  (0-6)&(-3-10)&(-6-14)&(-9-18) \\
  (6-8)&(0-12)&(-6-16)&(-12-20) \\
  (18-10)&(9-14)&(0-18)&(-9-22)
  \end{pmatrix} \\ \\
  3A-2B&=\begin{pmatrix}
  -6&-13&-20&-27 \\
  -2&-12&-22&-32 \\
  8&6&-18&-31
  \end{pmatrix}
  \end{aligned}
  $$

## c) Encuentre una matriz $X$, de modo que: $3X - 2A = B$ .

Resolver ecuación:
$$\begin{aligned}3X-2A&=B \\3X&=2A+B \\X&=\frac{2A+B}{3}\end{aligned}$$

Calcular $2A+B$ :

$$
\begin{aligned}
2A+B &= \begin{pmatrix}
2*0+3&2*-1+5&2*-2+7&2*-3+9 \\
2*2+4&2*0+6&2*-2+8&2*-4+10 \\
2*6+5&2*3+7&2*0+9&2*-3+11
\end{pmatrix} \\ \\
2A+B&=\begin{pmatrix}
3&3&3&3 \\
8&6&4&2 \\
17&13&9&5
\end{pmatrix}
\end{aligned}
$$

---

# 2.- Dada las matrices

$$
A= \begin{pmatrix}
1 & -2  \\
2 &  4  \\
3 &  5
\end{pmatrix}
\quad \text{,} \quad
B= \begin{pmatrix}
1 & -1  \\
2 &  7
\end{pmatrix}
\quad \text{y} \quad
C= \begin{pmatrix}
-1 & 2  \\
0 &  1  \\
-3 & 2
\end{pmatrix}
$$

## Calcular, si es posible, $A*B+C$ .

---

# 3.- Sea $A$ una matriz cuadrada de orden $n\times n$. Para cada $n \in \mathbb{N}$, se define

$$
\begin{aligned}
A^{n} = A*A*\dots*A(n \text{ veces})\space.
\end{aligned}
$$

Teniendo presente la definición previa, y considerando las siguientes matrices

$$
A=\begin{pmatrix}
2 & 2 \\ 8 & -2
\end{pmatrix}
\quad\text{y}\quad
B=\begin{pmatrix}
2 & -2 \\ 4 & -2
\end{pmatrix}
$$

## a) Verifique que $A^{2}+B^{2}=(A+B)^{2}$ .

Resolver $A^{2}+B^{2}$

- Resolver $A^{2}$ :
  $$
  \begin{aligned}
  A^{2} &= \begin{pmatrix}
  2 & 2 \\ 8 & -2
  \end{pmatrix} * \begin{pmatrix}
  2 & 2 \\ 8 & -2
  \end{pmatrix} \\ \\
  A^{2} &= \begin{pmatrix}
  ((2*2) +(2*8)) & ((2*2)+(2*-2)) \\ ((8*2)+(-2*8)) & ((8*2)+(-2*-2))
  \end{pmatrix} \\ \\
  A^{2}&=\begin{pmatrix}
  4+16&4-4 \\
  16-16&16+4
  \end{pmatrix} \\ \\
  A^{2} &= \begin{pmatrix}
  20 & 0 \\ 0 & 20
  \end{pmatrix}
  \end{aligned}
  $$
- Resolver $B^{2}$ :
  $$
  \begin{aligned}
  B^{2}&=\begin{pmatrix}
  2 & -2 \\ 4 & -2
  \end{pmatrix}*\begin{pmatrix}
  2 & -2 \\ 4 & -2
  \end{pmatrix} \\  \\
  B^{2}&=\begin{pmatrix}
  ((2*2)+(-2*4)) & ((2*-2)+(-2*-2)) \\ ((4*2)+(-2*4)) & ((4*-2)+(-2*-2))
  \end{pmatrix} \\ \\
  B^{2}&=\begin{pmatrix}
  4-8&-4+4 \\
  8-8&-8+4
  \end{pmatrix}\\ \\
  B^{2}&=\begin{pmatrix}
  -4&0 \\
  0&-4
  \end{pmatrix}
  \end{aligned}
  $$
- Resolver $A^{2}+B^{2}$

  $$
  \begin{aligned}
  A^{2}+B^{2}&=\begin{pmatrix}
  20 & 0 \\ 0 & 20
  \end{pmatrix} + \begin{pmatrix}
  -4 &0 \\ 0 &-4
  \end{pmatrix} \\ \\
  A^{2}+B^{2} &= \begin{pmatrix}
  (20-4) & 0\\0&(20-4)
  \end{pmatrix} \\ \\
  A^{2}+B^{2}&=\begin{pmatrix}
  16 &0\\0&16
  \end{pmatrix}
  \end{aligned}
  $$

  Resolver $(A+B)^{2}$

- Resolver $A+B$:
  $$
  \begin{aligned}
  A+B&=\begin{pmatrix}
  2&2\\8&-2
  \end{pmatrix} + \begin{pmatrix}
  2&-2\\4&-2
  \end{pmatrix}\\ \\
  A+B&=\begin{pmatrix}
  (2+2)&(2-2)\\(8+4)&(-2-2)
  \end{pmatrix}\\ \\
  A+B&=\begin{pmatrix}
  4&0\\16&-4
  \end{pmatrix}
  \end{aligned}
  $$
- Resolver $(A+B)^{2}$:

$$
\begin{aligned}
(A+B)^{2}&=\begin{pmatrix}
4&0\\16&-4
\end{pmatrix} \times \begin{pmatrix}
4&0\\16&-4
\end{pmatrix} \\ \\
(A+B)^{2}&=\begin{pmatrix}
((4*4)+(0*16))&((4*0)+(0*-4))\\((16*4)+(-4*16))&((16*0)+(-4*-4))
\end{pmatrix} \\ \\
(A+B)^{2}&=\begin{pmatrix}
16&0\\0&16
\end{pmatrix}
\end{aligned}
$$

Se ha comprobado que se cumple $A^{2}+B^{2} =(A+B)^{2}$ para las matrices dadas.

## b) Compruebe que $(A+B)(A-B)\neq A^{2}-B^{2}$ .

Resolver $(A+B)$:

$$


$$

---

# 4.- Considere

$$
A=\begin{pmatrix}
4 & -1 \\ 8 & -2
\end{pmatrix} \quad\text{e}\quad I_{2}=\begin{pmatrix}
1 & 0 \\ 0 & 1
\end{pmatrix}
$$

- Encontrar, si es posible, números $b$ y $c$ tales que
  $$
  A^{2}+bA+cI_{2} = \begin{pmatrix}
  0 & 0 \\ 0 & 0
  \end{pmatrix}
  $$
