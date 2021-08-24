<template>
  <div id="banner">
    <router-link to="/">
      <table class="logo">
        <tr>
          <td rowspan="3" width="50px">
            <img 
              src="@/assets/chemlogo.png" 
              alt="Benzene"
            />
          </td>
          <td class="header-1">
            Chemical Transformation Database
          </td>
        </tr>
        <tr>
          <td class="header-2">
            Web User Interface
          </td>
        </tr>
        <tr>
          <td><hr></td>
        </tr>
      </table>
    </router-link>
  </div>
</template>

<style>
#banner {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background: #0071BC;
  font-size: 16px;
  text-shadow: 1px 1px 5px grey;

}
#banner img {
  width: 100%;
  -webkit-filter: drop-shadow(1px 1px 5px grey);
  filter: drop-shadow(1px 1px 5px grey);
}
#banner table.logo {
  width: 100%;
}
#banner .header-1 {
  font-family: Cambria;
  font-style: normal;
  color: white;
  padding-left: 7px;
}
#banner .header-2 {
  font-family: Aparajita;
  font-style: italic;
  color: white;
  padding-left: 7px;
}
#banner hr {
  color: white;
  border: 1px solid white;
  margin-left: 7px;
  box-shadow: 1px 1px 5px grey;
}
#banner a:link {
  text-decoration: none;
}
</style>