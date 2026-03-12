import React from 'react';
import { motion } from 'framer-motion';

export const Legal: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12"
                >
                    <header className="mb-12 border-b border-slate-100 pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4 tracking-tight">
                            Aviso de Privacidad y Términos de Uso
                        </h1>
                        <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                            Servicios Globales para la Salud, S.A. (SERSALUD)
                        </p>
                    </header>

                    <div className="space-y-12 text-slate-700 leading-relaxed">
                        {/* Section 1: Privacy Notice */}
                        <section id="privacidad">
                            <h2 className="text-2xl font-bold text-medical-800 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-medical-500 rounded-full"></span>
                                1. AVISO DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">IDENTIFICACIÓN DEL RESPONSABLE</h3>
                                    <p>
                                        La entidad responsable del tratamiento de sus datos personales es Servicios Globales para la Salud, S.A. (en adelante, "SERSALUD"), con domicilio social en Interamericas Diagonal 6 10-50 zona 10, Torre Norte 601, 01010, Ciudad de Guatemala, Guatemala. Puede contactarnos a través del correo electrónico <a href="mailto:info@sersalud.hospital" className="text-medical-600 hover:underline font-semibold">info@sersalud.hospital</a> o al teléfono <a href="tel:+50222129234" className="text-medical-600 hover:underline font-semibold">+502 2212 9234</a>.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">CATEGORÍA DE DATOS RECOLECTADOS</h3>
                                    <p className="mb-4">
                                        SERSALUD recolecta y trata datos de carácter identificativo y, de manera especial, datos sensibles de salud. Estos incluyen:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3">
                                        <li><strong>Datos Identificativos:</strong> Nombre completo, número de DPI, dirección física, correo electrónico y teléfono.</li>
                                        <li><strong>Datos de Salud (Sensibles):</strong> Antecedentes médicos, alergias, diagnósticos, historial clínico, medicamentos actuales y cualquier información proporcionada en los formularios de pre-admisión necesaria para la atención quirúrgica o ambulatoria.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">FINALIDADES DEL TRATAMIENTO</h3>
                                    <p className="mb-4">Sus datos serán tratados con las siguientes finalidades primarias:</p>
                                    <ul className="list-disc pl-6 space-y-3">
                                        <li><strong>Gestión de Pre-admisión:</strong> Procesar su solicitud de ingreso al centro hospitalario y programar procedimientos médicos.</li>
                                        <li><strong>Expediente Clínico:</strong> Integrar y custodiar su historial médico conforme a las normativas del Ministerio de Salud Pública y Asistencia Social (MSPAS).</li>
                                        <li><strong>Comunicación:</strong> Contactarle para confirmar citas, resultados de exámenes o seguimiento post-operatorio.</li>
                                        <li><strong>Facturación:</strong> Gestionar los pagos correspondientes a los servicios prestados. Se hace constar que los precios cotizados no incluyen el Impuesto al Valor Agregado (IVA), el cual será añadido al momento de la facturación conforme a la ley vigente.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">CONFIDENCIALIDAD Y SECRETO PROFESIONAL</h3>
                                    <p>
                                        SERSALUD garantiza que toda la información de salud es tratada bajo estricto Secreto Profesional. El acceso a los datos médicos está restringido exclusivamente al personal de salud y administrativo debidamente autorizado y capacitado en la protección de información sensible.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">DERECHOS DEL TITULAR (ARCO)</h3>
                                    <p>
                                        Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Para ejercer estos derechos, debe enviar una solicitud escrita a <a href="mailto:info@sersalud.hospital" className="text-medical-600 hover:underline font-semibold">info@sersalud.hospital</a>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Terms and Conditions */}
                        <section id="terminos">
                            <h2 className="text-2xl font-bold text-medical-800 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-medical-500 rounded-full"></span>
                                2. TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">OBJETO</h3>
                                    <p>
                                        Los presentes términos regulan el acceso y uso del portal web de SERSALUD. Al utilizar este sitio y completar los formularios de pre-admisión, el usuario acepta de manera íntegra y sin reservas todas las disposiciones incluidas en este documento.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">DESLINDE DE RESPONSABILIDAD MÉDICA</h3>
                                    <p>
                                        El contenido de este sitio web es de carácter informativo y administrativo. No constituye, bajo ninguna circunstancia, una consulta médica de emergencia, diagnóstico o prescripción de tratamiento. Ante una emergencia médica, el usuario debe acudir inmediatamente a un centro de urgencias o contactar a los servicios de rescate locales.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">RESPONSABILIDAD DEL USUARIO</h3>
                                    <p>
                                        El usuario garantiza que la información proporcionada en los formularios de pre-admisión es veraz, exacta y completa. SERSALUD no se hace responsable por diagnósticos erróneos o complicaciones médicas derivadas de la omisión, falsedad o inexactitud de la información suministrada por el paciente o sus responsables legales.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">PROPIEDAD INTELECTUAL</h3>
                                    <p>
                                        Todo el contenido, diseño, logotipos, software y códigos de programación de este portal son propiedad exclusiva de Servicios Globales para la Salud, S.A. o de sus desarrolladores. Queda prohibida la reproducción parcial o total, distribución o modificación sin autorización previa y por escrito.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">SEGURIDAD DIGITAL</h3>
                                    <p>
                                        SERSALUD implementa protocolos de seguridad mediante certificados SSL (HTTPS) para el cifrado de la información enviada a través de la web. Sin embargo, el usuario reconoce que las medidas de seguridad en internet no son inexpugnables y asume el riesgo inherente a la navegación digital.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="mt-16 pt-8 border-t border-slate-100 text-center">
                        <p className="text-slate-400 text-xs">
                            Última actualización: Marzo 2026. SERSALUD - Hospital de Cirugía Ortopédica Ambulatoria.
                        </p>
                    </footer>
                </motion.div>
            </div>
        </div>
    );
};
