import { useForm } from "react-hook-form";

const Recogida = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)}>
            <div className="container text-center ">
                <div className="row">
                    <div className="col">
                        <div className="form-login__item">
                            <label>Fecha</label>
                            <input
                                type="date"
                                {...register("date", { required: true })}
                                aria-invalid={errors.date ? "true" : "false"}
                            />
                            {errors.date && <p>Field required</p>}
                        
                            <label>Hora</label>
                            <input
                                type="time"
                                {...register("time", { required: true })}
                                aria-invalid={errors.time ? "true" : "false"}
                            />
                            {errors.time && <p>Field required</p>}

                        </div>
                        <div className="form-login__item">
                            <label>Direccion de Recogida</label>
                            <input
                                {...register ("direccionrecogida", { required: true, maxLength: 30 })}
                                aria-invalid={errors.direccionrecogida ? "true" : "false"}
                            />
                            {errors.direccionrecogida && <p>Field required. Max length 30</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Ciudad de Recogida</label>
                            <input
                                {...register("ciudadrecogida", { required: true, pattern: /^[A-Za-z]+$/i })}
                                aria-invalid={errors.ciudadrecogida ? "true" : "false"}
                            />
                            {errors.ciudadrecogida && <p>Field required. ABC required</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Nombre Destinatario</label>
                            <input
                            {...register("nombredestinatario", { required: true, pattern: /^[A-Za-z]+$/i })}
                            aria-invalid={errors.nombredestinatario ? "true" : "false"}
                        />
                        {errors.nombredestinatario && <p>Field required. ABC required</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Cédula/NIT Destinatario</label>
                            <input
                                type="number"
                                {...register("cedula", { })}
                                aria-invalid={errors.cedula ? "true" : "false"}
                        />
                        {errors.cedula && <p>Ingrese cédula</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Direccion de Entrega</label>
                            <input
                                {...register ("direccionentrega", { required: true, maxLength: 30 })}
                                aria-invalid={errors.direccionentrega ? "true" : "false"}
                            />
                            {errors.direccionentrega && <p>Field required. Max length 30</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Ciudad de Entrega</label>
                            <input
                                {...register("ciudadentrega", { required: true, pattern: /^[A-Za-z]+$/i })}
                                aria-invalid={errors.ciudadentrega ? "true" : "false"}
                            />
                            {errors.ciudadentrega && <p>Field required. ABC required</p>}
                        </div>
                        
                        <div className="form-login__item"></div>
                            <input type="submit" value="Send" />
                        </div>

                        <div className="col">
                        <p>Dimensiones del paquete</p>
                        <div className="form-login__item">
                            <label>Largo</label>
                            <input
                                type="number"
                                {...register("large", { })}
                                aria-invalid={errors.large ? "true" : "false"}
                            />
                            {errors.large && <p>Ingrese el largo de la caja en cm</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Ancho</label>
                            <input
                                type="number"
                                {...register("width", { })}
                                aria-invalid={errors.width ? "true" : "false"}
                        />
                        {errors.width && <p>Ingrese el ancho de la caja en cm</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Alto</label>
                            <input
                                type="number"
                                {...register("high ", { })}
                                aria-invalid={errors.high  ? "true" : "false"}
                        />
                        {errors.high  && <p>Ingrese el alto de la caja en cm</p>}
                        </div>
                        <div className="form-login__item">
                            <label>Peso</label>
                            <input
                                type="number"
                                {...register("weight", { })}
                                aria-invalid={errors.weight ? "true" : "false"}
                        />
                        {errors.weight && <p>Ingrese el peso de la caja en cm</p>}
                        </div>
                    </div>
                </div>
            </div>
            {/*  <div className="form-login__item">
                <label>Fecha</label>
                <input
                    type="date"
                    {...register("date", { required: true })}
                    aria-invalid={errors.date ? "true" : "false"}
                />
                {errors.date && <p>Field required</p>}

                <label>Hora</label>
                <input
                    type="time"
                    {...register("time", { required: true })}
                    aria-invalid={errors.time ? "true" : "false"}
                />
                {errors.time && <p>Field required</p>}

             </div>
            <div className="form-login__item">
                
            </div>
            <div className="form-login__item">
                <label>Direccion de Recogida</label>
                <input
                    {...register ("direccionrecogida", { required: true, maxLength: 30 })}
                    aria-invalid={errors.direccionrecogida ? "true" : "false"}
                />
                {errors.direccionrecogida && <p>Field required. Max length 30</p>}
            </div>
            <div className="form-login__item">
                <label>Ciudad de Recogida</label>
                <input
                    {...register("ciudadrecogida", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.ciudadrecogida ? "true" : "false"}
                />
                {errors.ciudadrecogida && <p>Field required. ABC required</p>}
            </div>
            <div className="form-login__item">
                <label>Nombre Destinatario</label>
                <input
                    {...register("nombredestinatario", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.nombredestinatario ? "true" : "false"}
                />
                {errors.nombredestinatario && <p>Field required. ABC required</p>}
            </div>
            <div className="form-login__item">
                <label>Cédula/NIT Destinatario</label>
                <input
                    type="number"
                    {...register("cedula", { })}
                    aria-invalid={errors.cedula ? "true" : "false"}
                />
                {errors.cedula && <p>Ingrese cédula</p>}
            </div>
            <div className="form-login__item">
                <label>Direccion de Entrega</label>
                <input
                    {...register ("direccionentrega", { required: true, maxLength: 30 })}
                    aria-invalid={errors.direccionentrega ? "true" : "false"}
                />
                {errors.direccionentrega && <p>Field required. Max length 30</p>}
            </div>
            <div className="form-login__item">
                <label>Ciudad de Entrega</label>
                <input
                    {...register("ciudadentrega", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.ciudadentrega ? "true" : "false"}
                />
                {errors.ciudadentrega && <p>Field required. ABC required</p>}
            </div>
            
            <input type="submit" value="Send" /> */}
        </form>
    )
}

export default Recogida