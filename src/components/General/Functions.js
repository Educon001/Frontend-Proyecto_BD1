import swet from 'sweetalert';
import ErrorIcon from '@mui/icons-material/Error';

export function formatDate(date) {
   var d = new Date(date),
       month = '' + (d.getMonth() + 1),
       day = '' + d.getDate(),
       year = d.getFullYear();

   if (month.length < 2)
      month = '0' + month;
   if (day.length < 2)
      day = '0' + day;

   return [year, month, day].join('-');
}

export async function getDates(aux,funcion){
   let url = 'http://localhost:4000/' + aux;
   try {
      const response = await fetch(url);
      const data = await response.json();
      funcion(data)
      console.log(data)
   }catch (e){
      swet('Error al conectar ' + <ErrorIcon/>);

      console.error(e);

   }


}

async function eliminar(aux){
   let url = 'http://localhost:4000/' + aux;
   try {
      const response = await fetch(url, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      console.log('Success: ', response.status);
      if (response.status == 400) {
         swet({
            title: 'Warning',
            text: 'No se puede eliminar este registro',
            icon: 'warning',
            dangerMode: true,
         });
      } else if (200) {
         swet({
            title: 'Eliminado',
            text: 'El Registro fue eliminado exitosamente',
            icon: 'success',
            dangerMode: true,
         }).then(()=>window.location.reload())

      }

   } catch (e) {
      swet('Error al conectar ' + <ErrorIcon/>);

      console.error(e);
   };
}

export async function eliminarFila(aux) {
   swet({
      title: 'Warning',
      text: '¿Seguro desea eliminar este registro?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
   }).then((willDelete) => {if (willDelete) {
      eliminar(aux)
   } else {
      swet({
         title: 'Eliminacion Cancelada',
         text: 'No se elimino el registro',
         icon: 'warning',
         buttons: true,
         dangerMode: true,
      })      }})
   
}



export async function modificarFila(aux, body) {
   console.log('URL : '+aux)
   console.log('Probando : ')
   console.log(body)
   let url = 'http://localhost:4000/' + aux;
   try {
      const response = await fetch(url, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(body),
      });
      console.log('Success: ', response.status);
      if (response.status == 400) {
         swet({
            title: 'Warning',
            text: 'No se pudo modificar el registro',
            icon: 'warning',
            dangerMode: true,
         });
      } else if (200) {
         swet({
            title: 'Actualizado',
            text: 'El Registro fue actualizado exitosamente',
            icon: 'success',
            successMode: true,
         }).then(()=>window.location.reload())

      }

      console.log(body)
      console.log(aux)

   } catch (e) {
      swet('Error al conectar ' + <ErrorIcon/>);

      console.error(e);
   }
}
