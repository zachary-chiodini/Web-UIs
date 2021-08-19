<template>
  <div id="banner">
    <router-link to="/">
      <table class="logo">
        <tr>
          <td rowspan="3" width="100px">
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
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 5px;
  background: #2c3e50;
  border-bottom: 5px solid #4e6c71;
}
#banner img {
  height: 100%;
  width: 100%;
}

#banner table.logo {
  width: 100%;
  padding-left: 10px;
  padding-right: 20px;
}
#banner .header-1 {
  font-family: Cambria;
  font-size: 30px;
  font-style: normal;
  font-weight: 0;
  color: white;
  padding-left: 15px;
}
#banner .header-2 {
  font-family: Aparajita;
  font-size: 30px;
  font-style: italic;
  font-weight: 100;
  color: white;
  padding-left: 15px;
}
#banner hr {
  color: white;
  border: 0.5px solid white;
  background-color: white;
  border-radius: 10px;
  margin-left: 15px;
}
#banner a:link {
  text-decoration: none;
}
</style>