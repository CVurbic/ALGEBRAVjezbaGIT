OBAVEZNO OTVORITI TERMINAL SA DESNI KLIK NA FOLDER I "Open in Intefrated Terminal"
   ![Alt text](image.png)

Sve upisivati u novo otvorenom terminalu:

1. git clone "URL"
2. Promjeni kod 
3. kreiraj novi branch i prijedi odmah na njega 
  - git checkout -b "naziv brancha"
4. Pipremi sve promjene sa komandom
  - git add -A
  - za dodavanje samo odredenih  fajlova koristiti: 
  - git add naziv_fajla
5. Napravi commit (napisati opis commita):
  - git commit -m "Opis_commita"
6. Napravi push na GitHub, ako nije vec u repozitoriju:
  - git push origin "naziv_brancha"
7. Ako je već u repozitoriju, onda se direktno push-uje:
   - git push
   