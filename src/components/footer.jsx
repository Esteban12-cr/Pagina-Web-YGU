import '../Styles/footer.css';

export default function footer() {
  return (
    <footer class="footer">
      <div class="footer-container">

        <div class="footer-info">
          <h2>Bufete Legal</h2>
          <p>Defendiendo tus derechos con compromiso y excelencia.</p>
          <p><strong>Tel:</strong> +506 8888-8888</p>
          <p><strong>Email:</strong> info@bufete.com</p>
        </div>


        <div class="footer-map">
          <h3>Ubicación</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.74916442425257!2d-84.32655508471348!3d10.068565384589323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa059971f9d6443%3A0xa5ab19d54b3545fd!2sYGU%20Abogada%20y%20Notaria%20P%C3%BAblica!5e0!3m2!1ses!2scr!4v1776888992571!5m2!1ses!2scr" 
          width="400" 
          height="200" 
          style={{ border: 0 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© 2026 Bufete Legal - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
